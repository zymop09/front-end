import React, {Component} from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default class ProfileScreen extends Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Profile</Text>
                <Button title="Go to Package" onPress={() => navigate('Package')} />
                <Button title="Go to Review" onPress={() => navigate('Review')} />
                <Button title="Go to History" onPress={() => navigate('History')} />
                <Button title="Go to Security" onPress={() => navigate('Security')} />
            </View>
        );
    }    
}