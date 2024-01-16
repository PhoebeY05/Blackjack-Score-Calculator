import * as React from 'react';
import { View, ScrollView} from 'react-native';
import Text from "@kaloraat/react-native-text";
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  EduVICWANTBeginner_400Regular,
  EduVICWANTBeginner_500Medium,
  EduVICWANTBeginner_600SemiBold,
  EduVICWANTBeginner_700Bold,
} from '@expo-google-fonts/edu-vic-wa-nt-beginner';

function HelpScreen() {
  let [fontsLoaded] = useFonts({
    EduVICWANTBeginner_400Regular,
    EduVICWANTBeginner_500Medium,
    EduVICWANTBeginner_600SemiBold,
    EduVICWANTBeginner_700Bold,
  });


  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ScrollView style={{ flex: 1}}>
        {/* Settings */}
        <View style ={{ flex: 1, justifyContent:"center", margin:20}}>
          <Text title bold center style = {{lineHeight:50, fontFamily:'EduVICWANTBeginner_700Bold'}}>SETTING NAMES</Text>
          <Text bold style = {{fontSize:20, marginTop: 10 , lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium' }}>Steps to take:</Text>
          <Text style = {{fontSize:20, marginTop: 10, fontFamily:'EduVICWANTBeginner_500Medium' }}>1. Input player's name</Text>
          <Text style = {{fontSize:20, marginTop: 10, color: "#004d00" , lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium' }}>- Starting with the banker, then the player to the right and continue until the person to the left of the banker</Text>
          <Text style = {{fontSize:20, marginTop: 10 , lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium' }}>2. Press 'Submit' button after every name inputted</Text>
          <Text style = {{fontSize:20, marginTop: 10 , lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium' }}>3. Press 'Choose Your Mode!' after submitting every players' name</Text>
        </View>
        {/* Mode */}
        <View style ={{ flex: 1, justifyContent:"center", margin:20}}>
          <Text title bold center style = {{lineHeight:50, fontFamily:'EduVICWANTBeginner_700Bold' }}>CHOOSE MODE</Text>
          <Text  style = {{fontSize:20, marginTop: 10 , lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium' }}>There are 2 modes to choose from: </Text>
          {/* Standard */}
          <Text bold style = {{fontSize:30, marginTop: 30, lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium' }}>1. Standard</Text>
          <Text bold style = {{fontSize:20, marginTop: 10 , lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium' }}>In Standard Settings, User must ...</Text>
          <Text style = {{fontSize:20, marginTop: 10, lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium' }}> 1. Preset rotation of the banker role</Text>
          <Text  style = {{fontSize:20, marginTop: 10, color: "#004d00", lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium' }}>  • Down: Clockwise  </Text>
          <Text  style = {{fontSize:20, marginTop: 10, color: "#004d00", lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium' }}>  • Up: Anti-Clockwise</Text>
          <Text style = {{fontSize:20, marginTop: 10, fontFamily:'EduVICWANTBeginner_500Medium' }}> 2. Choose Fixed or Variable number of rounds between turns </Text>
          <Text  style = {{fontSize:20, marginTop: 10, color: "#004d00", lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium' }}>  • Fixed: Set fixed number at the start  </Text>
          <Text  style = {{fontSize:20, marginTop: 10, color: "#004d00", lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium' }}>  • Variable: Set number at the start and after every round completed </Text>
          {/* Score */}
          <Text bold style = {{fontSize:20, marginTop: 10 , lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium' }}>In Score (Standard), User can ...</Text>
          <Text  style = {{fontSize:20, marginTop: 10, lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium' }}> - Choose Combo by pressing '+' button</Text>
          <Text  style = {{fontSize:20, marginTop: 10, lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium' }}> - Change Banker by pressing 'Next Person!' after they finish their round (preset number of turns) </Text>
          {/* Customise */}
          <Text bold style = {{fontSize:30, marginTop: 30, lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium' }}>2. Customise</Text>   
          {/* Score */}
          <Text bold style = {{fontSize:20, marginTop: 10 , lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium' }}>In Score (Customise), User can ...</Text>
          <Text  style = {{fontSize:20, marginTop: 10, lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium' }}> - Choose Combo by pressing '+' button</Text>
          <Text  style = {{fontSize:20, marginTop: 10, lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium' }}> - Tap to choose Banker</Text>
          <Text  style = {{fontSize:20, marginTop: 10, lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium' }}> - See Number of Turns a player has been banker by pressing 'End Turn!' </Text>
        </View>
        {/* Combos */}
        <View style ={{ flex: 1, justifyContent:"center", margin:20}}>
          <Text title bold center style = {{lineHeight:50, fontFamily:'EduVICWANTBeginner_700Bold' }}>COMBO</Text>
          <Text bold style = {{fontSize:20, marginTop: 10, fontFamily:'EduVICWANTBeginner_500Medium' }}>Steps to take:</Text>
          <Text style = {{fontSize:20, marginTop: 10, lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium'  }}>1. Choose whether player's hand is a Number or Special combo</Text>
          <Text style = {{fontSize:20, marginTop: 10, color: "#004d00" , lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium' }}>- Higher Number (player + 1)</Text>
          <Text style = {{fontSize:20, marginTop: 10, color: "#004d00", lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium'  }}>- Ban Ban (player + 3)</Text>
          <Text style = {{fontSize:20, marginTop: 10, color: "#004d00" , lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium' }}>- Ban Luck (player + 2)</Text>
          <Text style = {{fontSize:20, marginTop: 10, color: "#004d00" , lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium' }}>- Wulong (tick = success = player + 2, cross = failure = player - 2)</Text>
          <Text style = {{fontSize:20, marginTop: 10, color: "#004d00" , lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium' }}>{"- Ban Ban > Ban Luck > Wulong (e.g. if player got Ban Ban, banker got Ban Luck, banker - 3)"}</Text>
          <Text style = {{fontSize:20, marginTop: 10, lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium' }}>2a. For Special combos, tap the image then press 'Submit' button</Text>
          <Text style = {{fontSize:20, marginTop: 10, lineHeight:30, fontFamily:'EduVICWANTBeginner_500Medium' }}>2b. For Number combos, press the 'Submit' button or 'BUSTED' image then tap 'Check You Score!'</Text>
        </View>
      </ScrollView>
    );
  }
}
export default HelpScreen