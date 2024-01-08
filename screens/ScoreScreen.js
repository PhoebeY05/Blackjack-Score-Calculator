import * as React from 'react';
import {useState} from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import Text from "@kaloraat/react-native-text";
import { SubmitButtonB,} from '../components/SubmitButton';
import { useRoute } from "@react-navigation/native"
import rotateBanker from '../functions/RotateBanker';
import computeScore from "../functions/ComputeScore";
import { RegularPopup } from "../components/Popup";

const handleTurn = async (turns, setting, old, count, banker, setBanker, setCount, addCount, score, setScore, combo, isVarying, setRegularPopupVisible, indicator) => {
    if (isVarying && count==0 && banker == 0 && typeof indicator == 'undefined'){
        setRegularPopupVisible(true);
    }
    else{
        setRegularPopupVisible(false);
    }
    addCount(count, setCount)
    rotateBanker(turns=turns, setting=setting, players=old, count=count, banker=banker,setBanker=setBanker, setCount = setCount, addCount = addCount)
    if (count != 0){
        computeScore(score, setScore, combo, banker)
    }
}
function ChangingText({ style, isNext}) {
    if (isNext){
        return (
            <Text center bold title style = {style}>Next Person!</Text>
        );
    }
    else{
        return (
            <Text center bold title style = {style}>End Turn!</Text>
        );
    }
    
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


function ScoreScreen({navigation}) { 
    const [isRegularPopupVisible, setRegularPopupVisible] = useState(false);
    const route = useRoute()
    const indicator = route.params?.indicator
    var setting = route.params?.data
    var old = route.params?.old
    var [turns, setTurns] = useState(route.params?.extra)
    var [banker,setBanker] = useState(0)
    var [count, setCount] = useState(0)
    var [score, setScore] = useState(FixedLengthList(old.length))
    var [refresh, setRefresh] = useState(false)
    var [combo, setCombo] = useState(FixedLengthList(old.length))
    const isVarying =  setting[0] ==  "varying" || setting[1] == "varying"
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
        ItemSeparatorComponent={<View style={{ height: 50 , borderBottomWidth:5, bottom:15 }} />}
        ListEmptyComponent={
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", top: 300 }}>
            <Text style={{ fontSize: 20 }}>No Players Found!</Text>
            </View>
        }
        renderItem={({ item, index }) => {
            return (
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Text semi center style={{ fontSize: 40, width: "100%", height: 50,right:60, top:10 }}>{item}</Text>
                <Text></Text>
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
                    onPress = {() => navigation.navigate("Combo", {data :setting, extra: turns, old:old, new:index, score:score, banker:banker, count:count, refresh:refresh, combo:combo, page:"Score"})}
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
                    justifyContent:"center",
                    right:180

                }}
                >{score[index]}</Text>
            </View>
            
                );
            }}
        />       
        <TouchableOpacity
        onPress={() => handleTurn(turns, setting, old, count, banker, setBanker, setCount, addCount, score, setScore, combo,isVarying, setRegularPopupVisible, indicator)}
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
            <ChangingText isNext = {count ==0} style = {{  color: "white", fontSize:40 }} ></ChangingText>
        </TouchableOpacity>
        {isRegularPopupVisible && (
        <RegularPopup hidden="Number of turns:" v={turns} setV={setTurns} isVisible={true} />
      )}
      </View>
    );
}
export default ScoreScreen
