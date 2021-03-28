import React, {Component} from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default class SellerScreen extends Component {
    render() {
    const { navigate } = this.props.navigation
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Seller</Text>
                <Button title="Go to Server" onPress={() => navigate('Server')} />
                <Button title="Go to Buyer" onPress={() => navigate('Buyer')} />
            </View>
        );
    }    
}