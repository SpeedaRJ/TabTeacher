import { Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faVault } from '@fortawesome/free-solid-svg-icons';

import { scale } from 'react-native-size-matters';

import styles from '../styles/GlobalStylesheet';

export default function SoonScreen({ navigation }) {
    return (
        <LinearGradient
            colors={['#030303', '#1f1f1f', '#3c3c3c']}
            style={styles.container}>
            <View style={styles.soonHolder}>
                <Text style={styles.soonText}>
                    <FontAwesomeIcon icon={faVault} style={styles.titleIcon} size={scale(60)} />
                </Text>
                <Text style={styles.soonText}>
                    This place is still safely locked away for now. {`\n\n`} Come back some other time.
                </Text>
                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate("Home")} activeOpacity={0.5}>
                    <Text style={styles.buttonIcon}> <FontAwesomeIcon style={styles.buttonIcon} icon={faArrowLeft} size={scale(30)} /> </Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}