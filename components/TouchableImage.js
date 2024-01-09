import React from "react";
import { TouchableOpacity, Image } from "react-native";
import updateElement from "../functions/Lists/UpdateElement.js"

const TouchableImage = ({style, source, index, value, setArray}) => (
    <TouchableOpacity 
    onPress = {() => {updateElement(setArray, index, value)}}
    style = {style}
    >
        <Image
            style = {style}
            source = {source}
        ></Image>
    </TouchableOpacity>
)
export default TouchableImage