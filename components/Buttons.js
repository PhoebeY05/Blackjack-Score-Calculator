import React from "react";
import { TouchableOpacity } from "react-native";
import Text from "@kaloraat/react-native-text";
import AppendToList from "../functions/Lists/AppendToList";

const ControlButton = ({title, style, text_style, onPress}) => (
    <TouchableOpacity
    onPress={onPress}
    style = {style}
    >
        <Text title center bold color ="white" style = {text_style}>{title}</Text>
    </TouchableOpacity>
)
const ConfirmButton = ({style, text_style, setArray, value}) => (
    <TouchableOpacity
    onPress={() => {AppendToList(setArray,value)}}
    style = {style}
    >
        <Text title center bold color ="white" style = {text_style}>Submit</Text>
    </TouchableOpacity>
)


export {ConfirmButton , ControlButton}