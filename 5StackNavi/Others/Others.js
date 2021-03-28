import React, {Component} from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CartScreen from './CartScreen.js';
import RecommendationScreen from './RecommendationScreen.js';
import NotificationScreen from './NotificationScreen.js';
import AdvsScreen from './AdvsScreen.js';
import DiscountScreen from './DiscountScreen.js';

const Stack = createStackNavigator();

export default class Others extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="Cart">
                <Stack.Screen name="Cart" component={CartScreen} />
                <Stack.Screen name="Recommendation" component={RecommendationScreen} /> 
                <Stack.Screen name="Notification" component={NotificationScreen} />
                <Stack.Screen name="Advs" component={AdvsScreen} /> 
                <Stack.Screen name="Discount" component={DiscountScreen} /> 
            </Stack.Navigator>
        );
    }   
}