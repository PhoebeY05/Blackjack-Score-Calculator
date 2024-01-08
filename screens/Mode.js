import * as React from 'react';
import {useState} from 'react';
import { View, TouchableOpacity, Image,FlatList } from 'react-native';
import MakeList from "../functions/MakeList";
import Text from "@kaloraat/react-native-text";
import { SubmitButtonB } from '../components/SubmitButton';
import {PopupS} from '../components/Popup.js'
import { useRoute } from "@react-navigation/native"
import computeScore from "../functions/ComputeScore";

const handleTurn = async (count, banker, setCount, addCount, score, setScore, combo) => {
    addCount(count, setCount)
    computeScore(score, setScore, combo, banker)
}


var addCount = (count, setCount) => {
    let newC = count + 1
    setCount(newC)
}

const FixedLengthList = (length) => {
    // Specify the fixed length of the list
    const listLength = length;
  
    // Initialize an array with the desired length
    const fixedList = Array.from({ length: listLength }, (_, index) => index);
    const zeroList = Array(listLength).fill(0);
    return(zeroList)
}
 
const checkBanker = (old,setBanker, index, setCount, setOld) =>{
    for (i=0;i<old.length;i++){
        old[i] = old[i].replace("(B)","")
    }
    const updatedOld = old.map((item, i) => (i === index ? `${item}(B)` : item));
    setBanker(index);
    setCount(0);
    // Assuming old is a state variable, update the state with the new array
    setOld(updatedOld)

}

function StandardScreen({navigation}) {
    const route = useRoute()
    const names = route.params?.names
    const [setting, setSetting] = useState([])
    const [ iturn, setIturn] = useState(0)
    return (
        <View style={{ flex: 1, top:20, alignItems:"center", justifyContent:"center"}}>
            <TouchableOpacity
                onPress = {() =>{ setSetting([]);setIturn(0)}}
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
            <TouchableOpacity
                onPress = {() => MakeList(li = setting, setLi = setSetting, n = "up")}
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
            <TouchableOpacity
                onPress = {() => MakeList(li = setting, setLi = setSetting, n = "down")}
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
            <View
                style = {{ borderWidth:2, backgroundColor: "white", height:100, width:100, marginVertical:15, left:60}}
            >
                <Image 
                source = {require("../assets/varying.png")}
                resizeMode='contain'
                style = {{height:100, width:100, marginVertical:8,right:1, position:"absolute", bottom:1}}
                />
                <Text bold center style = {{top:70}} >Varying</Text>
                <PopupS hidden = "Number of turns:" v = {iturn} setV = {setIturn} setting = {setting} setSetting = {setSetting} mode = "varying"
                    style = {{height:100, width:100, bottom:20}}
                ></PopupS>
            </View>
            <View
                style = {{ borderWidth:2, backgroundColor: "white", height:100, width:100, marginVertical:15, right: 60, bottom:130}}
            >
                <Image 
                source = {require("../assets/constant.png")}
                resizeMode='contain'
                style = {{height:80, width:90, marginVertical:8,left:1, position:"absolute", bottom:10}}
                />
                <Text bold center style = {{top:70}} >Constant</Text>
                <PopupS hidden = "Number of turns:" v = {iturn} setV = {setIturn} setting = {setting} setSetting = {setSetting} mode = "constant"
                style = {{height:100, width:100, bottom:20}}
                ></PopupS>
                
            </View>
          </View>
          <SubmitButtonB title = "Start Playing!"  onPress = {() => navigation.navigate("Score", {data :setting, extra: iturn, old:names, indicator:1})}
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



function CustomiseScreen({navigation}) { 
    const route = useRoute()
    var [old, setOld] = useState(route.params?.names)
    var [banker,setBanker] = useState(0)
    var [count, setCount] = useState(0)
    var [score, setScore] = useState(FixedLengthList(old.length))
    var [refresh, setRefresh] = useState(false)
    var [combo, setCombo] = useState(FixedLengthList(old.length))
    React.useEffect(() => {
        const { combo, score, banker, refresh, count } = route.params || {};
        if (combo) {
            setScore(score);
            setBanker(banker);
            setRefresh(refresh);
            setCount(count);
            setCombo(combo);
        }
    }, [route.params?.combo]);
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical:20, width:450, backgroundColor:"#bfbfbf", height:60, bottom:20,borderWidth:1}}>
            <Text semi title style = {{left:90, fontSize:40}}>Score:</Text>
            <Text semi title style = {{right:200, fontSize:40}}>Name:</Text>
        </View>
        <FlatList
        style={{ width: "100%" }}
        data={old}
        refreshing={true}
        extraData={refresh}
        ItemSeparatorComponent={<View style={{ height: 50 , borderBottomWidth:5 }} />}
        ListEmptyComponent={
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", top: 300 }}>
            <Text style={{ fontSize: 20 }}>No old Found!</Text>
            </View>
        }
        renderItem={({ item, index }) => {
            return (
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", position:"fixed" }}>
                <TouchableOpacity
                    onPress = {() => {checkBanker(old, setBanker, index, setCount, setOld)}}
                    style = {{
                        right:"100%",
                        top:"3%"
                    }}

                >
                    <Text semi center style={{ fontSize: 40, width: "100%", height: 50,right:60, top:10 }}>{item}</Text>
                </TouchableOpacity>
                <SubmitButtonB 
                    title = "+"
                    style = {{
                        borderWidth:2,
                        fontSize:50,
                        borderRadius: 350,
                        top:20,
                        backgroundColor:"#004d00",
                        height:50,
                        width:50,
                        position: "absolute",
                        right:25,
                    }}
                    onPress = {() => navigation.navigate("Combo", {old:old, new:index, score:score, banker:banker, count:count, refresh:refresh, combo:combo, page:"Customise"})}
                >
                </SubmitButtonB>
                <Text
                center title
                style = {{
                    height:70,
                    width: 110,
                    borderWidth:2,
                    fontSize:50,
                    borderRadius: 23,
                    top:10,
                    position:"absolute",
                    left:'50%'


                }}
                >{score[index]}</Text>
            </View>
            
                );
            }}
        />       
        <TouchableOpacity
        onPress={() => handleTurn(count, banker, setCount, addCount, score, setScore, combo)}
            style =  {{
                backgroundColor: "red",
                height: 70,
                width: 400,
                marginVertical: 20,
                justifyContent: "center",
                marginHorizontal: 15,
                borderRadius:10,
                borderWidth:3,
                bottom:100, 
                position:"absolute"
            }}
        >
            <Text center bold title style = {{  color: "white", fontSize:40 }}>End Turn {count+1}!</Text>
        </TouchableOpacity>
      </View>
    );
}

export {StandardScreen, CustomiseScreen}