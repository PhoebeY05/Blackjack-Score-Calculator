import React from "react";
import { TouchableOpacity, Image } from "react-native";
import updateElement from "../functions/UpdateElement.js"

const TouchableImage = ({style, source, combo, index, value, setCombo}) => (
    <TouchableOpacity 
    onPress = {() => {updateElement(combo, setCombo, index, value)}}
    style = {style}
    >
        <Image
            style = {style}
            source = {source}
        ></Image>
    </TouchableOpacity>
)
export default TouchableImage