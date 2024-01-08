import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Text from "@kaloraat/react-native-text";
import { useRoute } from "@react-navigation/native"

function ModeScreen({ navigation }) {
    const route = useRoute()
    const data = route.params?.data
    return (
      <View style={{ flex: 1}}>
        <View style = {{alignItems:"center"}}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Standard', {names:data})}
            style = {{
              alignItems:"center",
              marginVertical:100, 
              borderRadius:24, 
              backgroundColor:"#004d00",
              height: 200,
              width:300,
              paddingTop: 20,
            }}
          >
            <Text title bold color = "white"> Standard </Text>
            <Image 
              source = {require("../assets/cycle.png")}
              style = {{height:100, width:100, marginVertical:15, position: "relative", left: 60}}
            />
            <Image 
              source = {require("../assets/round_table.png")}
              style = {{height:100, width:100, position:"relative", right: 60, bottom:112}}
            />
          </TouchableOpacity>
        </View>
        <View style = {{alignItems:"center", bottom:100}}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Customise', {names:data})}
            style = {{
              alignItems:"center",
              marginVertical:100, 
              borderRadius:24, 
              backgroundColor:"#004d00",
              height: 200,
              width:300,
              paddingTop: 20,
            }}
          >
            <Text title bold color = "white"> Customise </Text>
            <Image 
              source = {require("../assets/choose.png")}
              style = {{height:100, width:100, marginVertical:15, position: "relative", right: 60}}
            />
            <Image 
              source = {require("../assets/count.png")}
              style = {{height:50, width:100, position:"relative", left: 60, bottom:90}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
export default ModeScreen