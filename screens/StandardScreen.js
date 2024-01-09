import * as React from 'react';
import {useState} from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import AppendToList from "../functions/Lists/AppendToList.js";
import Text from "@kaloraat/react-native-text";
import { ControlButton } from '../components/Buttons.js';
import {PopupSetting} from '../components/Popup.js'
import { useRoute } from "@react-navigation/native"


function StandardScreen({navigation}) {
    const route = useRoute()
    // Variables
    const names = route.params?.names
    const [setting, setSetting] = useState([])
    const [turns, setTurns] = useState(0)
    return (
        <View style={{ flex: 1, top:20, alignItems:"center", justifyContent:"center"}}>
            {/* Reset Button */}
            <TouchableOpacity
                onPress = {() =>{ setSetting([]);setTurns(0)}}
                style = {{
                    borderWidth:2,
                    height:50,
                    width:130,
                    top:620,
                    justifyContent:"center",
                    alignItems:"center",
                    borderRadius:10,
                    backgroundColor:"#bfbfbf"
                }}
            >
                <Text center bold style = {{fontSize:30, color:"black"}}>Reset</Text>
            </TouchableOpacity>
            {/* Rotation setting */}
            <View 
                style = {{ 
                alignItems:"center",
                marginVertical:100, 
                borderRadius:24, 
                backgroundColor:"#004d00",
                height: 200,
                width:300,
                paddingTop: 20,
                bottom:50
                }}
            >
            <Text bold center title color = "white">Rotation?  </Text>
            {/* Up Button */}
            <TouchableOpacity
                onPress = {() => AppendToList(setSetting,"up")}
            >
                <View
                    style = {{ borderWidth:2, backgroundColor: "white", height:100, width:100, marginVertical:15, left:60}}
                >
                    <Image 
                    source = {require("../assets/up.png")}
                    resizeMode='contain'
                    style = {{height:80, width:70, marginVertical:8,left:12, position:"absolute"}}
                    />
                </View>
            </TouchableOpacity>
            {/* Down Button */}
            <TouchableOpacity
                onPress = {() => AppendToList(setSetting,"down")}
            >
                <View
                    style = {{ borderWidth:2, backgroundColor: "white", height:100, width:100, marginVertical:15, right: 60, bottom:130}}
                >
                    <Image 
                    source = {require("../assets/down.png")}
                    resizeMode='contain'
                    style = {{height:80, width:70, marginVertical:8, left:10,position:"absolute"}}
                    />
                </View>
            </TouchableOpacity>
          </View>
          {/* Duration setting */}
          <View 
            style = {{alignItems:"center", 
            alignItems:"center",
            marginVertical:100, 
            borderRadius:24, 
            backgroundColor:"#004d00",
            height: 200,
            width:300,
            paddingTop: 20,
            bottom:180
            }}
            >
                <Text bold center title color = "white">Duration?  </Text>
            {/* Varying Button */}
            <View style = {{ borderWidth:2, backgroundColor: "white", height:100, width:100, marginVertical:15, left:60}}>
                <Image 
                source = {require("../assets/varying.png")}
                resizeMode='contain'
                style = {{height:100, width:100, marginVertical:8,right:1, position:"absolute", bottom:1}}
                />
                <Text bold center style = {{top:70}} >Varying</Text>
                <PopupSetting hidden = "Number of turns:" variable = {turns} setVariable = {setTurns} setting = {setting} setSetting = {setSetting} mode = "varying"
                    style = {{height:100, width:100, bottom:20}}
                ></PopupSetting>
            </View>
            {/* Constant Button */}
            <View
                style = {{ borderWidth:2, backgroundColor: "white", height:100, width:100, marginVertical:15, right: 60, bottom:130}}
            >
                <Image 
                source = {require("../assets/constant.png")}
                resizeMode='contain'
                style = {{height:80, width:90, marginVertical:8,left:1, position:"absolute", bottom:10}}
                />
                <Text bold center style = {{top:70}} >Constant</Text>
                <PopupSetting hidden = "Number of turns:" variable = {turns} setVariable = {setTurns} setting = {setting} setSetting = {setSetting} mode = "constant"
                style = {{height:100, width:100, bottom:20}}
                ></PopupSetting>
                
            </View>
          </View>
          {/* Score Button */}
          <ControlButton title = "Start Playing!"  onPress = {() => navigation.navigate("Score", {setting :setting, turns: turns, names:names, indicator:1, standard:true})}
                    style = {{
                        backgroundColor: "red",
                        height: 70,
                        width: 400,
                        marginVertical: 20,
                        justifyContent: "center",
                        marginHorizontal: 15,
                        borderRadius:10,
                        borderWidth:3,
                        bottom:160
                    }}
                    text_style = {{
                        fontSize: 30,
                    }}
            />
        </View>
      );
}

export default StandardScreen