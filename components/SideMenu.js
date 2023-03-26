import { View } from "react-native";
import { styles } from "../styles";
import CommonButton from "./CommonButton";

export default function SideMenu(props){
    return(
        <View style={props.isOpen ? styles.sideMenuOpened : styles.sideMenuClosed}>
            <CommonButton title={"Video library"} style={styles.sideMenuButton}></CommonButton>
            <CommonButton title={"Image Library"} style={styles.sideMenuButton}></CommonButton>
            <CommonButton title={"Mars Weather"} style={styles.sideMenuButton}></CommonButton>
        </View>
    );
}