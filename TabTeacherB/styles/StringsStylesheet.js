import { StyleSheet } from 'react-native';

import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    stringContainer: {
        width: scale(300),
        height: verticalScale(350),
        backgroundColor: "black",
        display: "flex",
        flexDirection: "colum",
        justifyContent: "space-around",
        borderRadius: 25,
        padding: scale(10),
        marginTop: verticalScale(5)
    }, 
    string: {
        width: "100%",
        borderRadius: 25,
        height: moderateVerticalScale(5),
        backgroundColor: "#9d6f33",
        overflow: "visible",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    note: {
        textAlign: "center",
        color: "white",
        fontFamily: "roboto-b",
        fontSize: scale(40),
        height: verticalScale(50),
        width: scale(40),
    },
    active: {
        color: "#ece895",
    },
    magenta: {
        backgroundColor: "#e73af5",
    },
    green: {
        backgroundColor: "#228b22",
    },
    orange: {
        backgroundColor: "#ff6600",
    },
    cyan: {
        backgroundColor: "#7af6f4"
    },
    yellow: {
        backgroundColor: "#ffd700",
    },
    red: {
        backgroundColor: "#fb2011",
    },
});

export default styles;