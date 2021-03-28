import React, {Component} from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './5StackNavi/Home/Home.js';
import Message from './5StackNavi/Message/Message.js';
import Post from './5StackNavi/Post/Post.js';
import Others from './5StackNavi/Others/Others.js';
import User from './5StackNavi/User/User.js';

const Tab = createBottomTabNavigator();

export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Message" component={Message} />
                    <Tab.Screen name="Post" component={Post} />
                    <Tab.Screen name="User" component={User} />
                    <Tab.Screen name="Others" component={Others} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }    
}