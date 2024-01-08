import React from "react";
import {View, TextInput} from "react-native";
import Text from "@kaloraat/react-native-text";

const UserInput = ({
    name,
    value, 
    setValue, 
    autoCapitalize = "words", 
    keyboardType = "default", 
    secureTextEntry = false,
    maxLength = 100,
    style,
    text_style,
    textAlign,
    overallStyle,
    clearButtonMode="always"
}) => {
    return (
        <View style = {overallStyle}>
            <Text semi style = {text_style}>{name}</Text>
            <TextInput
            autoCorrect = {false}
            autoCapitalize = {autoCapitalize}
            keyboardType = {keyboardType}
            secureTextEntry = {secureTextEntry}
            textAlign = {textAlign}
            maxLength = {maxLength}
            style = {style}
            value = {value}
            onChangeText = {(text) => setValue(text)}
            clearButtonMode= {clearButtonMode}
            />
        </View>
    )
}

export default UserInput;