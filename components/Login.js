import { useRef, useState } from "react";
import { View, Text, TextInput} from "react-native";
import CommonButton from "../CommonButton";
import { Database } from "../database";

export default function Login({navigation}){
    const username = useRef("");
    const password = useRef("");

    return(
        <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
            <Text style={{color: 'black', fontSize: 30}}>Log in</Text>

            <Text style={{color: 'black'}}>Username</Text>
            <TextInput ref={username}></TextInput>
            <Text style={{color: 'black'}}>password</Text>
            <TextInput secureTextEntry={true} ref={password}></TextInput>

            <CommonButton title={"Sign up"} style={{color: 'black'}} onClick={() => {
                db = new Database("http://localhost:8090", "admin", "1234");
                if(db.get("users").map((user) => {
                    if(user.username == username && user.password == password) return true;}))
                {
                    navigation.navigate("SignUp");
                }
            }}></CommonButton>
        </View>
    );
}