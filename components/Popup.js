import React, {useState} from "react";
import { TouchableOpacity, View } from "react-native";
import Text from "@kaloraat/react-native-text";
import Modal from "react-native-modal";
import UserInput from '../components/UserInput'
import { ControlButton, ConfirmButton  } from "./Buttons.js";
import TouchableImage from "../components/TouchableImage.js";
import updateElement from "../functions/Lists/UpdateElement.js";
import AppendToList from "../functions/Lists/AppendToList.js";



const PopupSetting = ({hidden, variable, setVariable, setSetting, mode, style, visible, text_style}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={toggleModal} style ={style}>
        <Text center bold style = {text_style}>{visible}</Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={{flex: 1}}>
          <UserInput
            text = {hidden} 
            value = {variable} 
            setValue = {setVariable} 
            autoCorrect = {false}
            style = {{
                height: 100,
                fontSize: 50,
                justifyContent: "center",
                marginBottom:20,
                borderWidth:3, 
                paddingLeft:10,
                top:300,
                width:200,
                left:60,
                position:"absolute",
                backgroundColor:"#004d00",
                borderRadius:24,
                marginVertical:-40,
                alignItems:"center"
            }}
            text_style ={{fontSize:40, top:200, color:"#ffffff", fontWeight:"bold", width:1000}}
            overallStyle = {{ marginHorizontal: 24, width: 200}}
            textAlign = "center"
            keyboardType= "number-pad"
            clearButtonMode="never"
            maxLength={5}
            />
          <TouchableOpacity onPress={toggleModal} style = {{borderWidth:5, backgroundColor:"#bfbfbf", top:400, height:50, width:150, left:20, position:"absolute"}}>
            <Text center bold style = {{fontSize:30, color:"black"}}>Go Back</Text>
            </TouchableOpacity>
        <ConfirmButton setArray ={setSetting} value = {mode}
            style = {{
                height: 70,
                fontSize: 30,
                justifyContent: "center",
                marginBottom:20,
                top:100,
                paddingLeft:10,
                width:200,
                left:70,
                position:"absolute",
            }}
            text_style={{
                position:"absolute",
                top:300,
                backgroundColor:"#bfbfbf",
                color:"black",
                width:150,
                left:150,
                borderWidth:5,
                fontSize:30,
                height:50
            }}
        >
        </ConfirmButton>
        </View>
      </Modal>
    </View>
  );
}
const PopupSpecial = ({ count,refresh, text, style, text_style, combo, setCombo, index, navigation, setting, turns,names,score, banker, page, standard}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={toggleModal} style = {style}>
        <Text center bold style = {text_style}>{text}</Text>
    </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1, alignItems:"center",justifyContent:"center", width:"100%", height:"100%"}}>
          <View style={{ flex: 1, alignItems:"center",justifyContent:"center",top:'3%'}}>
            <View style={{flex_direction:"row", width:"20%", height:"20%",position:"fixed", bottom:'20%', alignItems:"center"}}>
              <TouchableImage setArray = {setCombo} index = {index} value = "bb" source = {require('../assets/banban.png')} style = {{height:200, width:200, top:50, right:53}}></TouchableImage>
              <Text center title style = {{fontSize:50, color:"white", bottom:50, borderWidth:3, left:100,width:200, borderRadius:5, borderColor:"white", backgroundColor:"black"}}>Ban Ban</Text>
            </View>
            <View style={{flex_direction:"row", width:"20%", height:"20%",position:"fixed", alignItems:"center", bottom:'10%', right:'25%'}}>
              <TouchableImage setArray = {setCombo} index = {index} value = "bl" source = {require('../assets/banluck.png')} style = {{height:250, width:170, top:20, right:'10%'}}></TouchableImage>
              <Text center title style = {{fontSize:50, color:"white", left:180, bottom:105, borderWidth:3, width:230, borderRadius:5, borderColor:"white", backgroundColor:"black"}}>Ban Luck</Text>
            </View>
            <View style = {{ flex_direction:"row",width:"20%", height:"20%",position:"fixed", alignItems:"center", right:"30%", margin:20}}>
              <View style = {{ flex_direction:"column", alignItems:"center", justifyContent:"center", borderWidth:5, width:150, height:'130%', borderColor:"#bfbfbf"}}>
                <TouchableImage setArray = {setCombo} combo = {combo} index = {index} value = "success" source = {require('../assets/success.png')} style = {{height:100, width:100, bottom:'2%'}}></TouchableImage>
                <TouchableImage setArray = {setCombo} combo = {combo} index = {index} value = "failure" source = {require('../assets/failure.png')} style = {{height:100, width:100, top:'2%'}}></TouchableImage>
              </View>
              <Text center title style = {{fontSize:50, color:"white", left:215, bottom:150, borderWidth:3, width:190, borderRadius:5, borderColor:"white", backgroundColor:"black"}}>Wulong</Text>
            </View>
          </View>
          <TouchableOpacity onPress={toggleModal} style = {{borderWidth:5, backgroundColor:"#bfbfbf", top:800, height:50, width:150, left:20, position:"absolute"}}>
            <Text center bold style = {{fontSize:30, color:"black"}}>Go Back</Text>
            </TouchableOpacity>
        <ControlButton
                title = "Submit"
                onPress = {() => navigation.navigate(page, {setting :setting, turns: turns, names:names, score:score, banker:banker, combo:combo, count:count, refresh:refresh, standard:standard})}
            style = {{
                height: 70,
                fontSize: 30,
                justifyContent: "center",
                marginBottom:20,
                top:500,
                paddingLeft:10,
                width:200,
                left:70,
                position:"absolute",
            }}
            text_style={{
                position:"absolute",
                top:300,
                backgroundColor:"#bfbfbf",
                color:"black",
                width:150,
                left:150,
                borderWidth:5,
                fontSize:30,
                height:50
            }}
        >
        </ControlButton>
        </View>
      </Modal>
    </View>
  );
}

const PopupNumber = ({variable, setVariable, hidden, style, text_style, setCombo, combo, index, visible, navigation, setting, turns, names,score, banker, i, count, refresh, page, standard}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={toggleModal} style ={style}>
        <Text center bold style = {text_style}>{visible}</Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={{flex: 1, alignItems:"center", justifyContent:"center", top:"5%"}}>
          <Text center bold style = {{color:"white", fontSize:80, top:'25%'}}>OR</Text>
          <UserInput
            text = {hidden} 
            value = {variable} 
            setValue = {setVariable} 
            autoCorrect = {false}
            style = {{
                height: 100,
                fontSize: 50,
                justifyContent: "center",
                borderWidth:3, 
                width:200,
                position:"absolute",
                backgroundColor:"#004d00",
                borderRadius:24,
                alignItems:"center",
                bottom:'80%'
            }}
            text_style ={{fontSize:40, color:"#ffffff", fontWeight:"bold", width:1000, bottom:"300%", right:"30%"}}
            overallStyle = {{ marginHorizontal: 24, width: 200}}
            textAlign = "center"
            keyboardType= "number-pad"
            clearButtonMode="never"
            maxLength={5}
            />
          <TouchableOpacity onPress={toggleModal} style = {{borderWidth:5, backgroundColor:"#bfbfbf", top:"40%", height:50, width:150, left:20, position:"absolute"}}>
            <Text center bold style = {{fontSize:30, color:"black"}}>Go Back</Text>
            </TouchableOpacity>
            <ControlButton title = "Submit" onPress = {() => {updateElement(setCombo,index, Number(variable))}}
            style = {{
                height: 70,
                fontSize: 30,
                justifyContent: "center",
                marginBottom:20,
                top:"6%",
                paddingLeft:10,
                width:200,
                left:70,
                position:"absolute",
            }}
            text_style={{
                position:"absolute",
                top:300,
                backgroundColor:"#bfbfbf",
                color:"black",
                width:150,
                left:150,
                borderWidth:5,
                fontSize:30,
                height:50
            }}
        />
        <TouchableImage setArray = {setCombo} index = {index} value = "bao" source = {require('../assets/bao.png')} style = {{height:200, width:200, top:"15%"}}></TouchableImage>
        <ControlButton title = "Check Your Score!" onPress = {() => navigation.navigate(page, {setting :setting, turns: turns, names:names, score:score, banker:banker, combo:combo, count:count, refresh:refresh, standard:standard})}
            style = {{
                backgroundColor: "red",
                height: 70,
                width: 380,
                marginVertical: 20,
                justifyContent: "center",
                borderRadius:10,
                borderWidth:3,
                bottom:'60%'
            }}
            text_style = {{
                fontSize: 30,
            }}
        />
        </View>
      </Modal>
    </View>
  );
}
const RegularPopup = ({hidden, variable, setVariable, isVisible}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  React.useEffect(() => {
    setModalVisible(isVisible);
  }, [isVisible]);

  const toggleModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <Modal isVisible={isModalVisible}>
        <View style={{flex: 1}}>
          <UserInput
            text = {hidden} 
            value = {variable} 
            setValue = {setVariable} 
            autoCorrect = {false}
            style = {{
                height: 100,
                fontSize: 50,
                justifyContent: "center",
                marginBottom:20,
                borderWidth:3, 
                paddingLeft:10,
                top:300,
                width:180,
                left:70,
                position:"absolute",
                backgroundColor:"#004d00",
                borderRadius:24,
                marginVertical:-40,
                alignItems:"center"
            }}
            text_style ={{fontSize:40, top:200, color:"#ffffff", fontWeight:"bold", width:1000}}
            overallStyle = {{ marginHorizontal: 24, width: 200}}
            textAlign = "center"
            keyboardType= "number-pad"
            clearButtonMode="never"
            maxLength={5}
            />
          <TouchableOpacity onPress={toggleModal} style = {{borderWidth:5, backgroundColor:"#bfbfbf", top:400, height:50, width:150, left:110, position:"absolute"}}>
            <Text center bold style = {{fontSize:30, color:"black"}}>Submit</Text>
            </TouchableOpacity>
        
        </View>
      </Modal>
    </View>
  );
}

export {PopupSetting, PopupSpecial, PopupNumber, RegularPopup}