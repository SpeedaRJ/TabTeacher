import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useState, useEffect } from 'react';

import Slider from '@react-native-community/slider';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlay, faPause, faRepeat, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";

import { scale } from 'react-native-size-matters';

import * as Progress from 'react-native-progress';

import songStyles from '../styles/SongsStylesheet';
import stringStyles from '../styles/StringsStylesheet';

export default function PlaySongScreen({ route }) {
    const { title, artist, image, tempo, notes } = route.params;
    const [firstColumnNotes, setFirstColumnNotes] = useState(["", "", "", "", "", ""]);
    const [secondColumnNotes, setSecondColumnNotes] = useState(["", "", "", "", "", ""]);
    const [thirdColumnNotes, setThirdColumnNotes] = useState(["", "", "", "", "", ""]);
    const [forthColumnNotes, setForthColumnNotes] = useState(["", "", "", "", "", ""]);
    const [fifthColumnNotes, setFifthColumnNotes] = useState(["", "", "", "", "", ""]);
    const [tempoScaler, setTempoScaler] = useState(0.5);
    const [intervalId, setIntervalId] = useState(null);
    const [playPause, setPlayPause] = useState(true);
    const [index, setIndex] = useState(-1);
    const [firstLoad, setFirstLoad] = useState(true);

    const firebaseConfig = {
        apiKey: "AIzaSyC3jg6EbBz3gGnhFAxyiHuez_06Ax-jjyc",
        authDomain: "tabteacher---sei-23.firebaseapp.com",
        databaseURL: "https://tabteacher---sei-23-default-rtdb.firebaseio.com",
        projectId: "tabteacher---sei-23",
        storageBucket: "tabteacher---sei-23.appspot.com",
        messagingSenderId: "343777058975",
        appId: "1:343777058975:web:f2017049a44cd3223702aa"
    };

    const firebaseApp = initializeApp(firebaseConfig);
    const database = getDatabase(firebaseApp);

    const transformNote = (note) => {
        if (note == 0 || note == "") return -3;
        if (note == 1) return 0;
        return note * 3 - 3;
    }

    const updateNotes = (notes, database, tempoScaler) => {
        if (index >= notes.length - 1) {
            setIndex(-1);
            return
        };

        setThirdColumnNotes(notes[index]);

        if (index >= 1) setSecondColumnNotes(notes[index - 1]);
        else setSecondColumnNotes(["", "", "", "", "", ""]);

        if (index >= 2) setFirstColumnNotes(notes[index - 2]);
        else setFirstColumnNotes(["", "", "", "", "", ""]);

        if (index + 1 <= notes.length - 2) setForthColumnNotes(notes[index + 1]);
        else setForthColumnNotes(["", "", "", "", "", ""]);

        if (index + 2 <= notes.length - 1) setFifthColumnNotes(notes[index + 2]);
        else setFifthColumnNotes(["", "", "", "", "", ""]);

        const hasZero = notes[index].includes(0);
        const zeroNode = notes[index].indexOf(0);

        let notesToPlay = notes[index].map((note) => { return transformNote(note) });

        set(ref(database, 'string_0/'), hasZero + "," + zeroNode);
        set(ref(database, 'string_1/'), notesToPlay.join(","));

        set(ref(database, 'tempo/'), tempo / tempoScaler);
    };

    const playPauseSong = () => {
        setPlayPause(!playPause);
    };

    const forwardBackward = (state) => {
        setIndex((oldIndex) => {
            if (state) {
                newIndex = oldIndex - 15;
                if (newIndex < 0) return 0;
                else return newIndex;
            }
            else {
                newIndex = oldIndex + 15;
                if (newIndex >= notes.length - 1) return notes.length - 1;
                else return newIndex;
            }
        });
    }

    const resetDatabase = () => {
        set(ref(database, 'string_0/'), false + "," + -1);
        set(ref(database, 'string_1/'), "-3,-3,-3,-3,-3,-3");
        set(ref(database, 'tempo/'), 0);
    };

    useEffect(() => {
        resetDatabase();
        setFirstLoad(false);
        return () => { resetDatabase(); clearInterval(intervalId); }
    }, []);

    useEffect(() => {
        if (intervalId) {
            if (index == -1) {
                resetDatabase();
                clearInterval(intervalId);
                setPlayPause(false);
            }
            else updateNotes(notes, database, tempoScaler);
        }
    }, [index]);

    useEffect(() => {
        if (intervalId) {
            if (playPause) {
                setIndex(index);
                setIntervalId(setInterval(() => {
                    setIndex((oldIndex) => oldIndex + 1);
                }, tempo / tempoScaler));
            }
            else {
                clearInterval(intervalId);
            }
        }
    }, [playPause]);

    useEffect(() => {
        if (intervalId) {
            clearInterval(intervalId);
        }
        setIndex(index);
        setIntervalId(setInterval(() => {
            setIndex((oldIndex) => oldIndex + 1);
        }, tempo / tempoScaler));
    }, [tempoScaler]);

    return (
        <LinearGradient
            colors={['#030303', '#1f1f1f', '#3c3c3c']}
            style={songStyles.songContainer}>
            <ImageBackground source={image} imageStyle={songStyles.songBackground} resizeMode="stretch">
                <View style={songStyles.songHolder}>
                    <Text style={songStyles.songData}>
                        {title} {`\n`} {artist}
                    </Text>
                    <View>
                        <View style={stringStyles.stringContainer}>
                            <View style={[stringStyles.string, stringStyles.magenta]}>
                                <Text style={stringStyles.note}>{firstColumnNotes[5]}</Text>
                                <Text style={stringStyles.note}>{secondColumnNotes[5]}</Text>
                                <Text style={[stringStyles.note, stringStyles.active]}>{thirdColumnNotes[5]}</Text>
                                <Text style={stringStyles.note}>{forthColumnNotes[5]}</Text>
                                <Text style={stringStyles.note}>{fifthColumnNotes[5]}</Text>
                            </View>
                            <View style={[stringStyles.string, stringStyles.green]}>
                                <Text style={stringStyles.note}>{firstColumnNotes[4]}</Text>
                                <Text style={stringStyles.note}>{secondColumnNotes[4]}</Text>
                                <Text style={[stringStyles.note, stringStyles.active]}>{thirdColumnNotes[4]}</Text>
                                <Text style={stringStyles.note}>{forthColumnNotes[4]}</Text>
                                <Text style={stringStyles.note}>{fifthColumnNotes[4]}</Text>
                            </View>
                            <View style={[stringStyles.string, stringStyles.orange]}>
                                <Text style={stringStyles.note}>{firstColumnNotes[3]}</Text>
                                <Text style={stringStyles.note}>{secondColumnNotes[3]}</Text>
                                <Text style={[stringStyles.note, stringStyles.active]}>{thirdColumnNotes[3]}</Text>
                                <Text style={stringStyles.note}>{forthColumnNotes[3]}</Text>
                                <Text style={stringStyles.note}>{fifthColumnNotes[3]}</Text>
                            </View>
                            <View style={[stringStyles.string, stringStyles.cyan]}>
                                <Text style={stringStyles.note}>{firstColumnNotes[2]}</Text>
                                <Text style={stringStyles.note}>{secondColumnNotes[2]}</Text>
                                <Text style={[stringStyles.note, stringStyles.active]}>{thirdColumnNotes[2]}</Text>
                                <Text style={stringStyles.note}>{forthColumnNotes[2]}</Text>
                                <Text style={stringStyles.note}>{fifthColumnNotes[2]}</Text>
                            </View>
                            <View style={[stringStyles.string, stringStyles.yellow]}>
                                <Text style={stringStyles.note}>{firstColumnNotes[1]}</Text>
                                <Text style={stringStyles.note}>{secondColumnNotes[1]}</Text>
                                <Text style={[stringStyles.note, stringStyles.active]}>{thirdColumnNotes[1]}</Text>
                                <Text style={stringStyles.note}>{forthColumnNotes[1]}</Text>
                                <Text style={stringStyles.note}>{fifthColumnNotes[1]}</Text>
                            </View>
                            <View style={[stringStyles.string, stringStyles.red]}>
                                <Text style={stringStyles.note}>{firstColumnNotes[0]}</Text>
                                <Text style={stringStyles.note}>{secondColumnNotes[0]}</Text>
                                <Text style={[stringStyles.note, stringStyles.active]}>{thirdColumnNotes[0]}</Text>
                                <Text style={stringStyles.note}>{forthColumnNotes[0]}</Text>
                                <Text style={stringStyles.note}>{fifthColumnNotes[0]}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={songStyles.sliderContainer}>
                        <Slider
                            style={songStyles.slider}
                            minimumValue={0.1}
                            maximumValue={1.9}
                            minimumTrackTintColor="#9d6f33"
                            maximumTrackTintColor="#ffffff"
                            thumbTintColor="#9d6f33"
                            value={tempoScaler}
                            onValueChange={setTempoScaler}
                            step={0.1}
                        />
                        <View style={songStyles.sliderTextContainer}>
                            <Text style={songStyles.sliderText}>SLOW</Text>
                            <Text style={songStyles.sliderText}>BASE</Text>
                            <Text style={songStyles.sliderText}>FAST</Text>
                        </View>
                    </View>
                    <View style={songStyles.progressBarContainer}>
                        <Progress.Bar progress={(index / notes.length)} width={scale(250)} borderColor={"#9d6f33"} color={"#dac67a"}/>
                    </View>
                    <View style={songStyles.controls}>
                        <TouchableOpacity style={songStyles.playPause} onPress={() => forwardBackward(true)} activeOpacity={0.5}>
                            <Text style={songStyles.playPauseIcon}>
                                <FontAwesomeIcon style={songStyles.playPauseIcon} icon={faBackward} size={scale(32)} />
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={songStyles.playPause} onPress={() => playPauseSong()} activeOpacity={0.5}>
                            <Text style={songStyles.playPauseIcon}>
                                {(() => {
                                    if (!firstLoad && (index >= notes.length - 1 || index == -1))
                                        return <FontAwesomeIcon style={songStyles.playPauseIcon} icon={faRepeat} size={scale(32)} />
                                    else if (playPause)
                                        return <FontAwesomeIcon style={songStyles.playPauseIcon} icon={faPause} size={scale(32)} />
                                    else
                                        return <FontAwesomeIcon style={songStyles.playPauseIcon} icon={faPlay} size={scale(32)} />
                                })()}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={songStyles.playPause} onPress={() => forwardBackward(false)} activeOpacity={0.5}>
                            <Text style={songStyles.playPauseIcon}>
                                <FontAwesomeIcon style={songStyles.playPauseIcon} icon={faForward} size={scale(32)} />
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </LinearGradient>
    );
}