import { StyleSheet , StatusBar } from "react-native";

export const styles = StyleSheet.create({
    navBar: {
        width: '100%',
        height: '10%',
        backgroundColor: 'white',
        position: 'relative',
        top: StatusBar.currentHeight,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,
        elevation: 2,
        zIndex: 2,
    },

    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        alignItems: 'center',
    },

    backgroundCircles: {
        borderRadius: 50,
        width: '50%',
        height: '50%',
        backgroundColor: 'red',
    },

    partOfMenuButton: {
        width: '90%',
        height: '10%',
        backgroundColor: 'black',
        margin: 4,
    },

    contentContainer: {
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 60,
        shadowColor: 'black'
    },

    button: {
        width: '50%',
        height: '10%',
        backgroundColor: 'white',
        margin: 30,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 50,
        color: 'black',
        fontFamily: 'normal',
    },

    contentImage: {
        width: '70%',
        height: '50%',
    },

    sideMenuClosed: {
        display: 'none',
    },

    sideMenuOpened : {
        position: 'absolute',
        top: '15%',
        width: '80%',
        height: '100%',
        backgroundColor: 'white',
        flexDirection: "column",
        justifyContent: "flex-start",
        elevation: 3,
    },

    sideMenuButton : {
        width: '80%',
        height: '8%',
        backgroundColor: 'white',
        margin: 30,
        borderWidth: 5,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center",
        color: 'black',
        fontFamily: 'normal',
        fontSize: 100,
    },

    menuButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: 60,
        height: 60,
    },

    map: {
        width: "70%",
        height: "30%",
    }
});