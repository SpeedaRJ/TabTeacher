import React, { useState } from 'react';

import { Text, View, FlatList, TouchableOpacity, Modal, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGuitar, faMusic, faGears, faGraduationCap, faCircleInfo, faStar, faStarHalfStroke, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faStar as faSolidStar } from '@fortawesome/free-regular-svg-icons';
import { faBluetooth } from '@fortawesome/free-brands-svg-icons';

import { scale } from 'react-native-size-matters';

import globalStyles from '../styles/GlobalStylesheet';
import lessonStyles from '../styles/LessonsStylesheet';

const menuItems = [
    { id: 0, text: "Lessons", icon: faGraduationCap, link: "Lessons" },
    { id: 1, text: "Songs", icon: faMusic, link: "Songs" },
    { id: 2, text: "Settings", icon: faGears, link: "Soon" },
    { id: 3, text: "Bluetooth", icon: faBluetooth, link: "Soon" },
    { id: 4, text: "About", icon: faCircleInfo, link: "About" }
]

const skillItems = [
    { id: 0, text: "Beginner", icon: faSolidStar, link: "Lessons" },
    { id: 1, text: "Intermediate", icon: faStarHalfStroke, link: "Lessons" },
    { id: 2, text: "Advanced", icon: faStar, link: "" }
]

export default function HomeScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(true);

    return (
        <LinearGradient
            colors={['#030303', '#1f1f1f', '#3c3c3c']}
            style={globalStyles.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={lessonStyles.centeredView}>
                    <View style={lessonStyles.modalView}>
                        <Text style={lessonStyles.modalTitle}>Please Choose Your Skill Level</Text>
                        <FlatList data={skillItems} renderItem={({ item }) =>
                            <TouchableOpacity activeOpacity={0.5}
                                style={lessonStyles.skillButton}
                                onPress={() => {
                                    if (!item.link) setModalVisible(!modalVisible);
                                    else navigation.navigate(item.link, { skillLevel: item.id });
                                }}>
                                <Text style={lessonStyles.skillButtonIcon}>
                                    <FontAwesomeIcon style={lessonStyles.skillButtonIcon} icon={item.icon} size={scale(18)} />
                                </Text>
                                <Text style={lessonStyles.skillButtonText}> {item.text} </Text>
                            </TouchableOpacity>} numColumns={1}
                        />
                    </View>
                </View>
            </Modal>
            <View style={globalStyles.titleHolder}>
                <TouchableOpacity style={globalStyles.logoImageHolder} activeOpacity={0.5} onPress={() => setModalVisible(!modalVisible)}>
                    <Image source={require('../assets/images/logo.png')} style={globalStyles.logoImage} resizeMode="contain" />
                </TouchableOpacity>
                {/* <FontAwesomeIcon icon={faGuitar} style={globalStyles.titleIcon} size={scale(60)} />*/}
            </View>
            <FlatList data={menuItems} renderItem={({ item }) =>
                <TouchableOpacity style={globalStyles.menuButton} onPress={() => navigation.navigate(item.link, { skillLevel: 0 })} activeOpacity={0.5}>
                    <Text style={globalStyles.buttonIcon}>
                        <FontAwesomeIcon style={globalStyles.buttonIcon} icon={item.icon} size={scale(30)} />
                    </Text>
                    <Text style={globalStyles.buttonText}> {item.text} </Text>
                </TouchableOpacity>} numColumns={1}
            />
        </LinearGradient>
    );
}