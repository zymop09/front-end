import React, {Component} from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default class BuyerScreen extends Component {
    render() {
    const { navigate } = this.props.navigation
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Buyer</Text>
                <Button title="Go to Server" onPress={() => navigate('Server')} />
                <Button title="Go to Seller" onPress={() => navigate('Seller')} />
            </View>
        );
    }    
}