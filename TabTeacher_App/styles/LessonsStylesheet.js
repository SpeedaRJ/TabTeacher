import { StyleSheet, Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: verticalScale(50),
    },
    centeredView: {
        marginTop: verticalScale(150),
    },
    modalView: {
        margin: scale(20),
        backgroundColor: '#ece895',
        borderRadius: 20,
        padding: scale(35),
        alignItems: 'center',
        elevation: 5,
    },
    modalTitle: {
        marginBottom: scale(8),
        textAlign: 'center',
        fontSize: scale(24),
        fontFamily: 'roboto-bl',
    },
    skillButton: {
        backgroundColor: "black",
        borderRadius: 15,
        margin: moderateScale(10),
        padding: moderateScale(10),
        maxWidth: scale(220),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    skillButtonIcon: {
        textAlign: 'center',
        color: '#ece895',
    },
    skillButtonText: {
        fontSize: scale(26),
        textAlign: 'center',
        fontFamily: 'roboto-b',
        marginLeft: scale(10),
        color: '#ece895',
    },
    collapsibleView: {
        width: scale(width - 100),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    lessonTitle: {
        fontSize: scale(26),
        fontFamily: 'roboto-b',
        color: '#ece895',
        marginLeft: scale(10)
    },
    guitarImage: {
        width: scale(width - 110),
        height: verticalScale(150),
        resizeMode: 'contain',
    },
    guitarImageVertical: {
        width: scale(width - 110),
        height: verticalScale(300),
        resizeMode: 'contain',
    },
    lessonsText: {
        fontFamily: 'roboto-r',
        fontSize: scale(14),
        color: "white",
        margin: scale(5)
    },
    buttonIcon: {
        textAlign: 'center',
        color: '#9d6f33',
    }
});

export default styles;