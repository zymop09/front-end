import React, {Component} from 'react';
import { Button, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default class HomeScreen extends Component {
    render() {
    const { navigate } = this.props.navigation
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                    <TouchableOpacity onPress={() => navigate('Detail1')}>
                        <Image 
                            source={require('./Images/1.jpg')} 
                            style={styles.one}
                        /> 
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigate('Detail3')}>
                        <Image 
                            source={require('./Images/3.jpg')} 
                            style={styles.two}
                        /> 
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigate('Detail5')}>
                        <Image 
                            source={require('./Images/5.jpg')} 
                            style={styles.three}
                        /> 
                    </TouchableOpacity>
                         
                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={() => navigate('Detail2')}>
                        <Image 
                            source={require('./Images/2.jpg')} 
                            style={styles.four}
                        /> 
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigate('Detail4')}>
                        <Image 
                            source={require('./Images/4.jpg')} 
                            style={styles.five}
                        /> 
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigate('Detail6')}>
                        <Image 
                            source={require('./Images/6.jpg')} 
                            style={styles.six}
                        /> 
                    </TouchableOpacity>
                         
                </View>
            </View>           
        );
    }    
}

const styles = StyleSheet.create({
    one: {
        width: 150,
        height: 150,   
        top : -50,
        left: 30,
    },

    two: {
        width: 150,
        height: 150,  
        left: 30,
    },

    three: {
        width: 150,
        height: 150,  
        top : 50,
        left: 30,
    },

    four: {
        width: 150,
        height: 150,   
        top : -50,
        right: 30,
    },

    five: {
        width: 150,
        height: 150,  
        right: 30,
    },

    six: {
        width: 150,
        height: 150,  
        top : 50,
        right: 30,
    },
});