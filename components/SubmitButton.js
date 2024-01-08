import React from "react";
import { TouchableOpacity } from "react-native";
import Text from "@kaloraat/react-native-text";
import MakeList from "../functions/MakeList";
import updateElement from "../functions/UpdateElement";



// const SubmitButtonB = ({title, page, navigation, variable, style, text_style, extra_data, old_data, new_data}) => (
//     <TouchableOpacity
//     onPress={() => navigation.navigate(page, {data :variable, extra: extra_data, old:old_data, new:new_data})} 
//     style = {style}
//     >
//         <Text title center bold color ="white" style = {text_style}>{title}</Text>
//     </TouchableOpacity>
// )
const SubmitButtonB = ({title, style, text_style, onPress}) => (
    <TouchableOpacity
    onPress={onPress}
    style = {style}
    >
        <Text title center bold color ="white" style = {text_style}>{title}</Text>
    </TouchableOpacity>
)
const SubmitButtonS = ({style, text_style, names, setNames, name}) => (
    <TouchableOpacity
    onPress={() => {MakeList(li = names, setLi = setNames, n = name)}}
    style = {style}
    >
        <Text title center bold color ="white" style = {text_style}>Submit</Text>
    </TouchableOpacity>
)

const SubmitButtonU = ({style, text_style, onPress}) => (
    <TouchableOpacity
    onPress = {onPress}
    style = {style}
    >
        <Text title center bold color ="white" style = {text_style}>Submit</Text>
    </TouchableOpacity>
)

export {SubmitButtonS , SubmitButtonB, SubmitButtonU}