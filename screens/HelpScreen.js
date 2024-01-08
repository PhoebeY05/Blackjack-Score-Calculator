import * as React from 'react';
import { View, ScrollView} from 'react-native';
import Text from "@kaloraat/react-native-text";


function HelpScreen() {
    return (
      <ScrollView style={{ flex: 1}}>
        <View style ={{ flex: 1, justifyContent:"center", margin:20}}>
          <Text title bold center style = {{lineHeight:30}}>SETTING NAMES</Text>
          <Text bold style = {{fontSize:20, marginTop: 10 , lineHeight:30 }}>Steps to take:</Text>
          <Text style = {{fontSize:20, marginTop: 10 }}>1. Input player's name</Text>
          <Text style = {{fontSize:20, marginTop: 10, color: "#004d00" , lineHeight:30 }}>- Starting with the banker, then the player to the right and continue until the person to the left of the banker</Text>
          <Text style = {{fontSize:20, marginTop: 10 , lineHeight:30 }}>2. Press 'Submit' button after every name inputted</Text>
          <Text style = {{fontSize:20, marginTop: 10 , lineHeight:30 }}>3. Press 'Choose Your Mode!' after submitting every players' name</Text>
        </View>
        <View style ={{ flex: 1, justifyContent:"center", margin:20}}>
          <Text title bold center style = {{lineHeight:30 }}>CHOOSE MODE</Text>
          <Text  style = {{fontSize:20, marginTop: 10 , lineHeight:30 }}>There are 2 modes to choose from: </Text>
          <Text bold style = {{fontSize:30, marginTop: 30, lineHeight:30 }}>1. Standard</Text>
          <Text bold style = {{fontSize:20, marginTop: 10 , lineHeight:30 }}>In Standard Settings, User must ...</Text>
          <Text style = {{fontSize:20, marginTop: 10, lineHeight:30 }}> 1. Preset rotation of the banker role</Text>
          <Text  style = {{fontSize:20, marginTop: 10, color: "#004d00", lineHeight:30 }}>  • Down: Clockwise  </Text>
          <Text  style = {{fontSize:20, marginTop: 10, color: "#004d00", lineHeight:30 }}>  • Up: Anti-Clockwise</Text>
          <Text style = {{fontSize:20, marginTop: 10, }}> 2. Choose Fixed or Variable number of rounds between turns </Text>
          <Text  style = {{fontSize:20, marginTop: 10, color: "#004d00", lineHeight:30 }}>  • Fixed: Set fixed number at the start  </Text>
          <Text  style = {{fontSize:20, marginTop: 10, color: "#004d00", lineHeight:30 }}>  • Variable: Set number at the start and after every round completed </Text>
          <Text bold style = {{fontSize:20, marginTop: 10 , lineHeight:30 }}>In Score (Standard), User can ...</Text>
          <Text  style = {{fontSize:20, marginTop: 10, lineHeight:30 }}> - Choose Combo by pressing '+' button</Text>
          <Text  style = {{fontSize:20, marginTop: 10, lineHeight:30 }}> - Change Banker by pressing 'Next Person!' after they finish their round (preset number of turns) </Text>
          <Text bold style = {{fontSize:30, marginTop: 30, lineHeight:30 }}>2. Customise</Text>   
          <Text bold style = {{fontSize:20, marginTop: 10 , lineHeight:30 }}>In Score (Customise), User can ...</Text>
          <Text  style = {{fontSize:20, marginTop: 10, lineHeight:30 }}> - Choose Combo by pressing '+' button</Text>
          <Text  style = {{fontSize:20, marginTop: 10, lineHeight:30 }}> - Tap to choose Banker</Text>
          <Text  style = {{fontSize:20, marginTop: 10, lineHeight:30 }}> - See Number of Turns a player has been banker by pressing 'End Turn!' </Text>
        </View>
        <View style ={{ flex: 1, justifyContent:"center", margin:20}}>
          <Text title bold center style = {{lineHeight:30 }}>COMBO</Text>
          <Text bold style = {{fontSize:20, marginTop: 10 }}>Steps to take:</Text>
          <Text style = {{fontSize:20, marginTop: 10, lineHeight:30  }}>1. Choose whether player's hand is a Number or Special combo</Text>
          <Text style = {{fontSize:20, marginTop: 10, color: "#004d00" , lineHeight:30 }}>- Higher Number (player + 1)</Text>
          <Text style = {{fontSize:20, marginTop: 10, color: "#004d00", lineHeight:30  }}>- Ban Ban (player + 3)</Text>
          <Text style = {{fontSize:20, marginTop: 10, color: "#004d00" , lineHeight:30 }}>- Ban Luck (player + 2)</Text>
          <Text style = {{fontSize:20, marginTop: 10, color: "#004d00" , lineHeight:30 }}>- Wulong (tick = success = player + 2, cross = failure = player - 2)</Text>
          <Text style = {{fontSize:20, marginTop: 10, color: "#004d00" , lineHeight:30 }}>{"- Ban Ban > Ban Luck > Wulong (e.g. if player got Ban Ban, banker got Ban Luck, banker - 3)"}</Text>
          <Text style = {{fontSize:20, marginTop: 10, lineHeight:30 }}>2a. For Special combos, tap the image then press 'Submit' button</Text>
          <Text style = {{fontSize:20, marginTop: 10, lineHeight:30 }}>2b. For Number combos, just press the 'Submit' button</Text>
        </View>
      </ScrollView>
    );
  }
export default HelpScreen