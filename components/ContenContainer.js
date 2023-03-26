import { Image, View } from "react-native";
import { styles } from "../styles";

export default function ContentContainer(props){
    return(
        <View style={styles.contentContainer}>
            {props.children}
        </View>
    );
}