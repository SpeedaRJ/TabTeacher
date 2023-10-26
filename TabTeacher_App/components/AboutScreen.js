import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFaceSmileWink } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/GlobalStylesheet';

export default function AboutScreen({ route }) {
    return (
        <LinearGradient
            colors={['#030303', '#1f1f1f', '#3c3c3c']}
            style={styles.container}>
            <Text style={styles.aboutTitle}>About</Text>
            <View style={styles.aboutTextHolder}>
                <View style={{ marginBottom: 10 }}>
                    <Text style={styles.aboutText}>
                        {`\u2043  This app is designed and developed for the purposes of education: We do not own any rights to the tabs used.`}
                    </Text>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={styles.aboutText}>
                        {`\u2043  For the best experience try using the physical TabTeacher product`} <FontAwesomeIcon style={styles.aboutText} icon={faFaceSmileWink} size={24} /> {`.`}
                    </Text>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={styles.aboutText}>
                        {`\u2043  Designed and developed by Rene Mohorič and Robert Jutreša in collaboration with Bruno Toič.`}
                    </Text>
                </View>
            </View>
        </LinearGradient>
    );
}