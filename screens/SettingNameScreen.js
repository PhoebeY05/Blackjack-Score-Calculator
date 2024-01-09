import * as React from 'react';
import {useState} from 'react';
import { View, Image } from 'react-native';
import UserInput from '../components/UserInput'
import {ConfirmButton, ControlButton }from '../components/Buttons';

function SettingNameScreen({ navigation }) {
    var [name, setName] = useState("")
    const [names, setNames] = useState([])
    return (
        <View style = {{flex:1, alignItems:"center", justifyContent:"center"}}>
            {/* Background Image */}
            <Image 
                style = {{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: 900,
                    resizeMode: 'cover',
                  }} 
                source = {require('../assets/bg.png') }
            /> 
            {/* Input text box & title */}
            <View style = {{zIndex:1, left:10}}>
                <UserInput 
                text = "Name of Player:" 
                value = {name} 
                setValue = {setName} 
                autoCapitalize = "words"
                autoCorrect = {false}
                style = {{
                    height: 70,
                    fontSize: 30,
                    justifyContent: "center",
                    marginBottom:20,
                    top:20,
                    borderWidth:3, 
                    paddingLeft:10,
                    width:380,
                    borderRadius:4,
                    zIndex:1
                }}
                text_style ={{fontSize:40, top:5,fontWeight:"black"}}
                overallStyle = {{ marginHorizontal: 24, width: 400}}
                textAlign = "left"
                />
                {/* Button to confirm name */}
                <ConfirmButton setArray ={setNames} value = {name}
                    style = {{
                        backgroundColor: "#008000",
                        height: 50,
                        width: 100,
                        justifyContent: "center",
                        marginHorizontal: 15,
                        borderRadius:10,
                        borderWidth:3,
                        left:290,
                        top:20
                    }}
                    text_style = {{
                        fontSize: 24,
                    }}
                />
                {/* Button to go to next page */}
                <ControlButton title = "Choose Your Mode!" onPress = {() => navigation.navigate("Mode", {names :names})}
                    style = {{
                        backgroundColor: "red",
                        height: 70,
                        width: 380,
                        marginVertical: 20,
                        justifyContent: "center",
                        marginHorizontal: 15,
                        borderRadius:10,
                        borderWidth:3,
                        bottom:300
                    }}
                    text_style = {{
                        fontSize: 30,
                    }}
                />
            </View>
        </View>
        
    );
}

export default SettingNameScreen
