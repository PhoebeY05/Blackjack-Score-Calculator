import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Text from "@kaloraat/react-native-text";


function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text title bold center style ={{  }}>Chinese BlackJack Score Calculator</Text>
        <Image 
              source = {require("../assets/logo.png")}
              style = {{height:200, width:200, alignItems:"center", justifyContent:"center", top:50}}
        />
        <TouchableOpacity 
            onPress={() => navigation.navigate('SettingN')}
            style = {{
              alignItems:"center",
              justifyContent:"center",
              height: "auto",
              top:150,
              backgroundColor: "#004d00",
              borderRadius:30
            }}
          >
            <Text title center color = "white" style = {{fontSize: 80, width:350, borderRadius:30, borderWidth:5 }}>START</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Help')}
            style = {{
              alignItems:"center",
              marginVertical:100, 
              borderRadius:24, 
              height: 150,
              width:250,
              paddingTop: 20,
              borderWidth: 5,
              top:100
            }}
          >
            <Text title bold center > How to Use? </Text>
            <Image 
              source = {require("../assets/help.png")}
              style = {{height:50, width:50, marginTop:15, alignItems:"center", justifyContent:"center"}}
            />
          </TouchableOpacity>
      </View>
    );
  }
  export default HomeScreen