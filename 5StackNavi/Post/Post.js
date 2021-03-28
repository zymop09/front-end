import React, {Component} from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PostScreen from './PostScreen.js';
import FormScreen from './FormScreen.js';

const Stack = createStackNavigator();

export default class Post extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="Post">
                <Stack.Screen name="Post" component={PostScreen} />
                <Stack.Screen name="Form" component={FormScreen} /> 
            </Stack.Navigator>
        );
    }   
}