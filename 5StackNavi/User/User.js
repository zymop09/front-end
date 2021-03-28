import React, {Component} from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from './ProfileScreen.js';
import PackageScreen from './PackageScreen.js';
import ReviewScreen from './ReviewScreen.js';
import HistoryScreen from './HistoryScreen.js';
import SecurityScreen from './SecurityScreen.js';

const Stack = createStackNavigator();

export default class User extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="Profile">
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Package" component={PackageScreen} /> 
                <Stack.Screen name="Review" component={ReviewScreen} />
                <Stack.Screen name="History" component={HistoryScreen} /> 
                <Stack.Screen name="Security" component={SecurityScreen} /> 
            </Stack.Navigator>
        );
    }   
}