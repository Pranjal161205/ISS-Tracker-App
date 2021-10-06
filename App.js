import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator()

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";

 function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator inintialRouteName = "Home" screenOptions = {{headerShown: false}}>
        <Stack.Screen name = "Home" component = {HomeScreen}/>
        <Stack.Screen name = "ISSLocation" component = {IssLocationScreen}/>
        <Stack.Screen name = "Meteor" component = {MeteorScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <MeteorScreen/>
    //   <StatusBar style="auto" />
    // </View>
    // <NavigationContainer></NavigationContainer>
  );
}
export default App;


