import * as React from 'react';
import {useState} from 'react';
import { View, FlatList, TouchableOpacity, } from 'react-native';
import Text from "@kaloraat/react-native-text";
import { ControlButton,} from '../components/Buttons';
import { useRoute } from "@react-navigation/native"
import rotateBanker from '../functions/RotateBanker';
import computeScore from "../functions/ComputeScore";
import { RegularPopup } from "../components/Popup";
import CleanList from '../functions/Lists/CleanList';


// Function to increase variable by 1
function addCount(count, setCount) {
    setCount(count + 1);
};

// Function to create a list of zeros
const FixedLengthList = (length) => {
    // Specify the fixed length of the list
    const listLength = length;
  
    // Initialize an array with the desired length
    const zeroList = Array(listLength).fill(0);
    return(zeroList)
}


function ScoreScreen({navigation}) { 
    // Variable used in this screen only
    const [isRegularPopupVisible, setRegularPopupVisible] = useState(false);
    const route = useRoute()
    // Universal variables
    const standard = route.params?.standard
    var [names, setNames] = useState(route.params?.names)
    var [banker,setBanker] = useState(0)
    var [count, setCount] = useState(0)
    var [score, setScore] = useState(FixedLengthList(names.length))
    var [refresh, setRefresh] = useState(false)
    var [combo, setCombo] = useState(FixedLengthList(names.length))
    // Variables used for Standard only
    const indicator = route.params?.indicator
    var setting = route.params?.setting
    var [turns, setTurns] = useState(Number(route.params?.turns))
    const [isVarying,setVarying] = useState(false)

    // Actions to take when changing screens
    React.useEffect(() => {
        const { combo, score, banker, refresh, count, setting, turns } = route.params || {};
        // Variables to set when coming back from Combo
        if (combo) {
            setScore(score);
            setBanker(banker);
            setRefresh(refresh);
            setCount(count);
            setCombo(combo);
        }
        // Variables to set when coming from Standard
        if (setting) {
            setTurns(turns);
            setVarying(setting[0] == "varying" || setting[1] == "varying");
        }
    }, [route.params]);
    // Remove extra (B) that could occur when going back
    React.useEffect(() => {
        if (route.params?.setting) {
            CleanList(names)
        }
      }, [route.params?.setting]);

    // Function to add to Count, set repeating popup for Varying, rotate banker if Standard, and compute score
    const handleTurn = async() => {
        addCount(count, setCount)
        if (standard) {
            if (isVarying && count==0 && banker == 0 && typeof indicator == 'undefined'){
                setRegularPopupVisible(true);
            }
            else{
                setRegularPopupVisible(false);
            }
            rotateBanker(turns=turns, setting=setting, players=names, count=count, banker=banker,setBanker=setBanker, setCount = setCount, addCount = addCount)
            if (count != 0){
                computeScore(score, setScore, combo, banker)
            }
        }
        else {
            computeScore(score, setScore, combo, banker)
        }
    }
    // Component to change text in button if standard and remain constant if customise
    function ChangingText({ style, isNext}) {
        if (standard) {
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
        else{
            return (
                <Text center bold title style = {style}>End Turn!</Text>
            );
        }
    }
    // Component to allow tapping names functionality for Customise
    const ChangingNames = ({item, index}) => {
        if (standard) {
            return (
                <View style = {{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                    <Text semi center style={{ fontSize: 40, width: "100%", height: 50,right:60}}>{item}</Text>
                    <Text
                    center title
                    style = {{
                        height:70,
                        width: 110,
                        borderWidth:2,
                        fontSize:50,
                        borderRadius: 23,
                        justifyContent:"center",
                        right:180
                        }}
                    >{score[index]}</Text>
                </View>
            );
        }
        else {
            const checkBanker = (names,setBanker, index, setCount, setNames) => {
                CleanList(names)
                const updatedOld = names.map((item, i) => (i === index ? `${item}(B)` : item));
                setBanker(index);
                setCount(0);
                setNames(updatedOld)
            }
            return (
                <View style = {{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                    <TouchableOpacity
                        onPress = {() => {checkBanker(names, setBanker, index, setCount, setNames)}}
                        style = {{
                            right:"100%",
                        }}

                    >
                        <Text semi center style={{ fontSize: 40, width: "100%", height: 50,right:60, top:10 }}>{item}</Text>
                    </TouchableOpacity>
                    <Text
                    center title
                    style = {{
                        height:70,
                        width: 110,
                        borderWidth:2,
                        fontSize:50,
                        borderRadius: 23,
                        position:"absolute",
                        left:'50%',
                        top:'2%'
                    }}
                    >{score[index]}</Text>
            </View>
            );
        }
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {/* Names => Score => + Button */}
            <FlatList
            initialNumToRender = {6}
            maxToRenderPerBatch = {6}
            style = {{top:0, width:"100%", flexGrow: 0, height:'83%',position:"absolute"}}
            data={names}
            ListHeaderComponent={
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom:20, width:450, backgroundColor:"#bfbfbf", height:60,borderWidth:1}}>
                    <Text semi title style = {{left:80, fontSize:40}}>Score:</Text>
                    <Text semi title style = {{right:190, fontSize:40}}>Name:</Text>
                </View>
            }
            stickyHeaderIndices={[0]}
            ItemSeparatorComponent={<View style={{ height: 50}} />}
            ListEmptyComponent={
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", top: "150%" }}>
                <Text style={{ fontSize: 50 }}>No Players Found!</Text>
                <Text style={{ fontSize: 20, marginTop:10 }}>Please input at least 1 player name.</Text>
                </View>
            }
            renderItem={({ item, index }) => {
                return (
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <ChangingNames item = {item} index = {index}></ChangingNames>
                    <ControlButton 
                        title = "+"
                        style = {{
                            borderWidth:2,
                            fontSize:50,
                            borderRadius: 350,
                            backgroundColor:"#004d00",
                            height:50,
                            width:50,
                            position: "absolute",
                            right:25,
                            top:"15%"
                        }}
                        onPress = {() => navigation.navigate("Combo", {setting :setting, turns: turns, names:names, index:index, score:score, banker:banker, count:count, refresh:refresh, combo:combo, page:"Score", standard:standard})}
                    >
                    </ControlButton>
                </View>
                
                    );
                }}
            />
            {/* Repeated popup */}
            {isRegularPopupVisible && (
                <RegularPopup hidden="Number of turns:" variable={turns} setVariable={setTurns} isVisible={true} />
            )}
            {/* Button to end turn */}
            <TouchableOpacity
            onPress={() => handleTurn(count=count, setCount=setCount)}
                style =  {{
                    backgroundColor: "red",
                    height: 70,
                    width: 400,
                    marginVertical: 20,
                    justifyContent: "center",
                    marginHorizontal: 15,
                    borderRadius:10,
                    borderWidth:3,
                    position:"absolute",
                    top:'85%'
                }}
            >
                <ChangingText isNext = {count ==0} style = {{  color: "white", fontSize:40 }} ></ChangingText>
            </TouchableOpacity>
      </View>
    );
}
export default ScoreScreen
