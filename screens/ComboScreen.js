import * as React from 'react';
import {useState} from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import UserInput from '../components/UserInput'
import {SubmitButtonU,} from '../components/SubmitButton';
import { useRoute } from "@react-navigation/native"
import {PopupCards, PopupU} from '../components/Popup.js';
import Text from "@kaloraat/react-native-text";


function ComboScreen({navigation}) {
    const route = useRoute()
    const page = route.params?.page
    var setting = route.params?.data
    var old = route.params?.old
    var turns = route.params?.extra
    var banker = route.params?.banker
    var index = route.params?.new
    var score = route.params?.score
    var count = route.params?.count
    var refresh = route.params?.refresh
    var [combo, setCombo] = useState(score)
    var [number, setNumber] = useState(0)
    React.useEffect(() => {
        if (route.params?.combo) {
            setCombo(route.params?.combo)
        }
      }, [route.params?.combo]);
    return ( 
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image 
                style = {{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
                zIndex: -1, // Set a negative zIndex to push it to the back
                }} 
                source = {require('../assets/bg.png') }
            />
            <Image 
                style = {{
                position: 'absolute',
                height:110,
                width:90,
                zIndex: -1, // Set a negative zIndex to push it to the back
                right:90,
                bottom:490,
                backgroundColor:"#bfbfbf",
                borderRadius:24,
                borderWidth:1
                }} 
                source = {require('../assets/NumberCombo.png') }
            />
            
            <Image 
                style = {{
                position: 'absolute',
                height:110,
                width:95,
                zIndex: -1, // Set a negative zIndex to push it to the back
                bottom:310,
                backgroundColor:"#bfbfbf",
                borderRadius:24,
                borderWidth:1,
                left:90
                }} 
                source = {require('../assets/SpecialCombo.png') }
            />
            <PopupU hidden = "Total Card Points:" v = {number} setV = {setNumber} combo={combo} setCombo={setCombo} index = {index} 
                style = {{height:150, width:200, top:220, borderWidth:3, justifyContent:"center", borderRadius:24, backgroundColor:"#004d00", right:90}} visible = "Number Combos"
                text_style = {{fontSize:40, color:"white"}}
                navigation = {navigation}
                page = {page}
                setting = {setting}
                turns = {turns} 
                old = {old}
                score ={score}
                banker = {banker}
                count = {count}
                refresh = {refresh}
                i = {index}

            />
            <PopupCards
                v = {number} setV = {setNumber} text = "Special Combos"
                style = {{height:150, width:200,bottom:30, borderWidth:3, justifyContent:"center", borderRadius:24, backgroundColor:"#004d00", left:90}} visible = "Number Combos"
                text_style = {{fontSize:40, color:"white"}}
                index = {index}
                combo  = {combo}
                setCombo={setCombo}
                navigation={navigation}
                page ={page}
                setting = {setting}
                turns = {turns} 
                old = {old}
                score ={score}
                banker = {banker}
                count = {count}
                refresh = {refresh}
            />
        </View>
    );
}
export default ComboScreen