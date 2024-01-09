import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen.js";
import ModeScreen from "./screens/ModeScreen.js";
import HelpScreen from "./screens/HelpScreen.js";
import ScoreScreen from "./screens/ScoreScreen.js";
import SettingNameScreen from "./screens/SettingNameScreen.js";
import  StandardScreen from './screens/StandardScreen.js';
import ComboScreen from './screens/ComboScreen.js';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{  
        headerStyle: {  
        backgroundColor: '#004d00',  
        },  
        headerTintColor: '#fff',  
        headerTitleStyle: {  
        fontWeight: 'bold',  
        },  
      }} 
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Setting" component={SettingNameScreen} options={{ title: 'Setting Names' }} />
        <Stack.Screen name="Help" component={HelpScreen} options={{ title: 'How to Use?' }}/>
        <Stack.Screen name="Mode" component={ModeScreen} options={{ title: 'Choose Mode' }} />
        <Stack.Screen name="Standard" component={StandardScreen} options={{ title: 'Standard Settings' }}/>
        <Stack.Screen name="Score" component={ScoreScreen} options={{ title: 'Score' }}/>
        <Stack.Screen name="Combo" component={ComboScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



