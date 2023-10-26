import { Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { scale } from 'react-native-size-matters';

import CollapsibleView from "@eliav2/react-native-collapsible-view";

import globalStyles from '../styles/GlobalStylesheet';
import lessonStyles from '../styles/LessonsStylesheet';

const musicalNotes = [
    [0, "", "", "", "", ""],
    ["", 1, "", "", "", ""],
    ["", "", 2, "", "", ""],
    ["", "", "", 3, "", ""],
    ["", "", "", "", 4, ""],
    ["", "", "", "", "", 5],
    ["", "", "", "", "", 6],
    ["", "", "", "", 7, ""],
    ["", "", "", 8, "", ""],
    ["", "", 9, "", "", ""],
    ["", 10, "", "", "", ""],
    [11, "", "", "", "", ""],
    ["", "", "", "", "", ""],
]

export default function SoonScreen({ route, navigation }) {
    const { skillLevel } = route.params;
    return (
        <LinearGradient
            colors={['#030303', '#1f1f1f', '#3c3c3c']}
            style={lessonStyles.container}>
            <CollapsibleView
                style={lessonStyles.collapsibleView}
                title={<Text style={lessonStyles.lessonTitle}>{"Guitar Structure"}</Text>}
                arrowStyling={{ size: scale(24), rounded: true, thickness: scale(8), color: "#9d6f33" }}
                initExpanded={skillLevel == 0}
            >
                <Image style={lessonStyles.guitarImage} source={require("../assets/images/guitar_diagram.jpg")} />
            </CollapsibleView>
            <CollapsibleView
                style={lessonStyles.collapsibleView}
                title={<Text style={lessonStyles.lessonTitle}>{"Holding a Guitar"}</Text>}
                arrowStyling={{ size: scale(24), rounded: true, thickness: scale(8), color: "#9d6f33" }}
            >
                <Image style={lessonStyles.guitarImageVertical} source={require("../assets/images/Footstool-Guitar-Position-Tips-600.jpg")} />
            </CollapsibleView>
            <CollapsibleView
                style={lessonStyles.collapsibleView}
                title={<Text style={lessonStyles.lessonTitle}>{"Holding a Pick"}</Text>}
                arrowStyling={{ size: scale(24), rounded: true, thickness: scale(8), color: "#9d6f33" }}
            >
                <Image style={lessonStyles.guitarImage} source={require("../assets/images/Abs-Beg-2-Holding-The-Pick.jpg")} />
            </CollapsibleView>
            <CollapsibleView
                style={lessonStyles.collapsibleView}
                title={<Text style={lessonStyles.lessonTitle}>{"Strings"}</Text>}
                arrowStyling={{ size: scale(24), rounded: true, thickness: scale(8), color: "#9d6f33" }}
                initExpanded={skillLevel == 1}
            >
                <Image style={lessonStyles.guitarImage} source={require("../assets/images/guitar_strings.png")} />
                <Text style={lessonStyles.lessonsText}>
                    The strings are numbered from 1 to 6, with 1 being the thinnest string and 6 being the thickest string.
                    We also color code the strings in TabTeacher to make it easier to follow along.
                    <Text style={{ color: "#fb2011" }}>6 (E) - Red</Text>,
                    <Text style={{ color: "#ebf543" }}>5 (A) - Yellow</Text>,
                    <Text style={{ color: "#7af6f4" }}>4 (D) - Cyan</Text>,
                    <Text style={{ color: "#e7a03a" }}>3 (G) - Orange</Text>,
                    <Text style={{ color: "#51d61a" }}>2 (B) - Green</Text>,
                    <Text style={{ color: "#e73af5" }}>1 (E) - Magenta</Text>.
                </Text>
            </CollapsibleView>
            <CollapsibleView
                style={lessonStyles.collapsibleView}
                title={<Text style={lessonStyles.lessonTitle}>{"Tabs"}</Text>}
                arrowStyling={{ size: scale(24), rounded: true, thickness: scale(8), color: "#9d6f33" }}
            >
                <Text style={lessonStyles.lessonsText}>
                    You will learn using the TABS notation. Where the numbers you see represent the number of the fret you need to press.
                </Text>
                <Image style={lessonStyles.guitarImage} source={require("../assets/images/tabs.png")} />
                <Text style={lessonStyles.lessonsText}>
                    Please keep in mind, when you see the number '0', you need only to play the string (without pressing any frets).
                </Text>
            </CollapsibleView>
            <CollapsibleView
                style={lessonStyles.collapsibleView}
                title={<Text style={lessonStyles.lessonTitle}>{"Tutorial"}</Text>}
                arrowStyling={{ size: scale(24), rounded: true, thickness: scale(8), color: "#9d6f33" }}
            >
                <Text style={lessonStyles.lessonsText}>
                    Press the button below to try a tutorial.
                </Text>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate("Play",
                        { title: "Tutorial", artist: "", image: require("../assets/images/notes.jpg"), tempo: 1000, notes: musicalNotes }
                    )}
                >
                    <Text style={globalStyles.buttonIcon}> <FontAwesomeIcon style={globalStyles.buttonIcon} icon={faArrowRight} size={scale(30)} /> </Text>
                </TouchableOpacity>
            </CollapsibleView>

        </LinearGradient>
    );
}