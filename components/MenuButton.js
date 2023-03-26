import { Pressable, View } from "react-native";
import { styles } from "../styles";

export default function MenuButton(props){
    return(
        <Pressable style={styles.menuButton} onPress={props.openFunction}>
            <View style={styles.partOfMenuButton}></View>
            <View style={styles.partOfMenuButton}></View>
            <View style={styles.partOfMenuButton}></View>
        </Pressable>
    );
}

