import React, {Component} from 'react';
import { Button, Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default class DetailScreen5 extends Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image 
                    source={require('../Images/5.jpg')} 
                    style={styles.image}
                /> 
                <Text style={styles.text}>$50.00</Text>
            </View>
        );
    }    
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,   
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        top: 30,
    }
});