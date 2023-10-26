import { Text, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

import * as React from 'react';
import Carousel from 'react-native-reanimated-carousel';

import { scale, verticalScale } from 'react-native-size-matters';

import homeStyles from '../styles/GlobalStylesheet';
import songStyles from '../styles/SongsStylesheet';

import songs from '../data/songs.json';

const songImages = [
    require("../assets/images/metallica-enter-sandman.jpg"),
    require("../assets/images/survivor-eye-of-the-tiger.jpg"),
    require("../assets/images/led-zeppelin-stairway-to-heaven.jpg"),
]

export default function SongSelectScreen({ navigation }) {
    const songList = songs.map((song, index) => {
        return { index: index, artist: song.artist, title: song.name, image: songImages[index], tempo: song.tempo, notes: song.notes }
    });
    return (
        <LinearGradient
            colors={['#030303', '#1f1f1f', '#3c3c3c']}
            style={homeStyles.container}>
            <View style={songStyles.container}>
                <Text style={songStyles.selectTitle}>
                    SONG SELECT <FontAwesomeIcon icon={faCirclePlay} style={songStyles.selectIcon} size={scale(32)} />
                </Text>
                <Carousel
                    loop
                    width={scale(300)}
                    height={verticalScale(500)}
                    autoPlay={false}
                    data={songList}
                    scrollAnimationDuration={1000}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <TouchableOpacity
                                style={songStyles.songSelection}
                                activeOpacity={0.5}
                                onPress={() => navigation.navigate("Play", { title: item.title, artist: item.artist, image: item.image, tempo: item.tempo, notes: item.notes })}
                            >
                                <Image
                                    source={item.image}
                                    style={songStyles.songImage}
                                />
                                <Text style={songStyles.songText}> {item.title} {`\n`} {item.artist} </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </LinearGradient>
    );
}