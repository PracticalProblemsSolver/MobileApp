import { Pressable, Text } from "react-native";

export default function CommonButton(props){
    return(
        <Pressable style={props.style}>
            <Text>{props.title}</Text>
        </Pressable>
    );
}
