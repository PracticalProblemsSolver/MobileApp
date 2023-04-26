import { useState } from "react";
import { View, Text } from "react-native";
import CommonButton from "../CommonButton";
import { Database } from "../database";

export default function SignUp({navigation}){
    const username = useRef("");
    const password = useRef("");

    return(
        <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
            <Text style={{color: 'black', fontSize: 20}}>Sign Up Screen</Text>

            <Text style={{color: 'black'}}>Username</Text>
            <TextInput ref={username}></TextInput>
            <Text style={{color: 'black'}}>password</Text>
            <TextInput secureTextEntry={true} ref={password}></TextInput>

            <CommonButton title={"Log in"} style={{color: 'black'}} onClick={() => {
                navigation.navigate("Login");
                db = new Database("http://localhost:8090", "admin", "1234");
                db.create(email, password);
            }}></CommonButton>
        </View>
    );
}