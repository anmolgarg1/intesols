import * as React from 'react'

// import Login from "../Screens/Login/Login";
// import ContactForm from "../Screens/Register/Register";
// import ContactList from "../Screens/HomePage/ScreenOne";
import Login from "../screens/Login";
import Weather from "../screens/Weather";
import ContactForm from "../screens/ContactForm";
import ContactList from "../screens/ContactList";

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
function Bottombar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Weather" component={Weather} />
      <Tab.Screen name="Form" component={ContactForm} />
      <Tab.Screen name="List" component={ContactList} />
      {/* <Tab.Screen name="Screen Two" component={ScreenTwo} />
      <Tab.Screen name="Screen Three" component={ScreenThree} />
      <Tab.Screen name="Screen Four" component={ScreenFour} /> */}
    </Tab.Navigator>
  );
}
function ScreenRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login}  />
        <Stack.Screen name='Home' component={Bottombar}  />
       
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default ScreenRouter;