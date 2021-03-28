import React, {Component} from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen.js';
import DetailScreen1 from './Details/DetailScreen1.js';
import DetailScreen2 from './Details/DetailScreen2.js';
import DetailScreen3 from './Details/DetailScreen3.js';
import DetailScreen4 from './Details/DetailScreen4.js';
import DetailScreen5 from './Details/DetailScreen5.js';
import DetailScreen6 from './Details/DetailScreen6.js';

const Stack = createStackNavigator();

export default class Home extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Detail1" component={DetailScreen1} />  
                <Stack.Screen name="Detail2" component={DetailScreen2} /> 
                <Stack.Screen name="Detail3" component={DetailScreen3} /> 
                <Stack.Screen name="Detail4" component={DetailScreen4} />  
                <Stack.Screen name="Detail5" component={DetailScreen5} />  
                <Stack.Screen name="Detail6" component={DetailScreen6} />  
            </Stack.Navigator>
        );
    }
    
}