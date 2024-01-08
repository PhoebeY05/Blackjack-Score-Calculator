import * as React from 'react';
import {useState} from 'react';
import { View, Image,  KeyboardAvoidingView } from 'react-native';
import Text from "@kaloraat/react-native-text";
import UserInput from '../components/UserInput'
import {SubmitButtonS, SubmitButtonB }from '../components/SubmitButton';
import { useRoute } from "@react-navigation/native"


// function SettingPlayersScreen({ navigation }) {
//     const [players, setPlayers] = useState("")
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <UserInput 
//           name = "Number of Players:" 
//           value = {players} 
//           setValue = {setPlayers} 
//           autoCapitalize = "words"
//           autoCorrect = {false}
//           maxLength= {2}
//           style = {{
//             borderBottomWidth: 0.5,
//             height: 70,
//             borderBottomColor: "#8e93a1",
//             marginBottom: 30,
//             fontSize: 50,
//             justifyContent: "center"
//             }}
//             text_style = {{fontSize: 50}}
//             textAlign= 'center'
//         />
//         <SubmitButtonP title ="Submit" page = "SettingN" navigation = {navigation} variable = {players} 
//             style = {{
//                 backgroundColor: "#008000",
//                 height: 70,
//                 width: 150,
//                 marginVertical: 20,
//                 justifyContent: "center",
//                 marginHorizontal: 15,
//                 borderRadius:10,
//                 borderWidth:3
//             }}
//             text_style = {{
//                 fontSize: 30,
//             }}
//         />
//         <Text>{JSON.stringify({players}, null, 4)}</Text>
//       </View>
//     );
// }

function SettingNameScreen({ navigation }) {
    var [name, setName] = useState("")
    const [names, setNames] = useState([])
    return (
        <View style = {{flex:1, alignItems:"center", justifyContent:"center"}}>
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
            <View style = {{zIndex:1, left:10}}>
                {/* <View style = {{flex:1}}>
                    <Text title center bold style = {{bottom:50, height: 100}}> ADD PLAYERS HERE:</Text>
                </View> */}
                <UserInput 
                name = "Name of Player:" 
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
                <SubmitButtonS names = {names} setNames ={setNames} name ={name}
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
                <SubmitButtonB title = "Choose Your Mode!" onPress = {() => navigation.navigate("Mode", {data :names})}
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
