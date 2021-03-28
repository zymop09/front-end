import React, {Component} from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default class RecommendationScreen extends Component {
    render() {
    const { navigate } = this.props.navigation
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Recommendation</Text>
                <Button title="Go to Cart" onPress={() => navigate('Cart')} />
                <Button title="Go to Notification" onPress={() => navigate('Notification')} />
                <Button title="Go to Advs" onPress={() => navigate('Advs')} />
                <Button title="Go to Discount" onPress={() => navigate('Discount')} />
            </View>
        );
    }    
}