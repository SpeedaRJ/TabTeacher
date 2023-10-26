import { StyleSheet, Dimensions } from 'react-native';

import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    songContainer: {
        width: width,
        height: height,
    },
    selectTitle: {
        color: '#9d6f33',
        fontFamily: 'roboto-b',
        fontSize: scale(48),
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectIcon: {
        color: '#9d6f33',
    },
    songSelection: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: scale(5),
    },
    songImage: {
        width: moderateScale(300),
        height: moderateScale(300),
        resizeMode: 'contain',
        margin: scale(5),
    },
    songText: {
        color: '#dac67a',
        fontFamily: 'roboto-b',
        fontSize: scale(32),
        textAlign: 'center',
    },
    songBackground: {
        width: width,
        height: height,
        opacity: 0.25
    },
    songHolder: {
        width: width,
        alignItems: 'center',
        justifyContent: 'flex-start',
        display: 'flex',
        marginTop: verticalScale(60)
    },
    songData: {
        color: '#9d6f33',
        fontFamily: 'roboto-b',
        fontSize: scale(36),
        textAlign: 'center',
    },
    sliderContainer: {
        width: scale(280),
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginVertical: verticalScale(5),
    },
    slider: {
        width: scale(250),
        height: scale(15),
        margin: scale(10),
    },
    sliderTextContainer: {
        width: scale(280),
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        margin: scale(10),
    },
    sliderText: {
        fontFamily: 'roboto-b',
        fontSize: scale(24),
        color: '#9d6f33',
    },
    progressBarContainer: {
        marginVertical: verticalScale(10),
    },
    controls: {
        display: 'flex',
        alignItems: 'space-evenly',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    playPause: {
        width: moderateScale(60),
        height: moderateVerticalScale(60),
        resizeMode: 'contain',
        margin: scale(5),
        borderRadius: 50,
        backgroundColor: '#dac67a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    playPauseIcon: {
        color: 'black',
        fontSize: scale(32),
        textAlign: 'center',
        padding: scale(1),
        margin: scale(1)
    },
});

export default styles;