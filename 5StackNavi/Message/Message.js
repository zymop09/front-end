import React, {Component} from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ServerScreen from './ServerScreen.js';
import SellerScreen from './SellerScreen.js';
import BuyerScreen from './BuyerScreen.js';

const Stack = createStackNavigator();

export default class Message extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="Server">
                <Stack.Screen name="Server" component={ServerScreen} />
                <Stack.Screen name="Seller" component={SellerScreen} /> 
                <Stack.Screen name="Buyer" component={BuyerScreen} />
            </Stack.Navigator>
        );
    }   
}