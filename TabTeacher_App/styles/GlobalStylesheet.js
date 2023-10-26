import { StyleSheet, Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImageHolder: {
        height: verticalScale(175),
        width: scale(325),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    logoImage: {
        height: verticalScale(300),
        width: scale(300),
    },
    titleHolder: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: moderateVerticalScale(75),
        paddingBottom: moderateVerticalScale(25),
    },
    title: {
        color: '#9d6f33',
        fontSize: scale(50),
        fontFamily: 'roboto-bl'
    },
    titleIcon: {
        color: '#9d6f33',
    },
    menuButton: {
        backgroundColor: "#00000000",
        borderRadius: 15,
        borderColor: "#ece895",
        borderWidth: 2,
        margin: moderateScale(10),
        padding: moderateScale(10),
        maxWidth: scale(220),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    buttonIcon: {
        textAlign: 'center',
        color: '#9d6f33',
    },
    buttonText: {
        fontSize: scale(26),
        textAlign: 'center',
        fontFamily: 'roboto-b',
        marginLeft: scale(10),
        color: '#9d6f33',
    },
    aboutTitle: {
        color: '#9d6f33',
        fontSize: scale(50),
        fontFamily: 'roboto-bl',
        marginBottom: verticalScale(35),
    },
    aboutTextHolder: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: scale(width * 0.7),
    },
    aboutText: {
        color: '#9d6f33',
        fontSize: scale(26),
        fontFamily: 'roboto-r',
        textAlign: 'justify',
    }, 
    soonHolder: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: scale(width * 0.7),
    },
    soonText: {
        color: '#9d6f33',
        fontSize: scale(26),
        fontFamily: 'roboto-r',
        textAlign: 'center',
        margin: scale(20),
    }
});

export default styles;