import React, {Component} from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default class PackageScreen extends Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Package</Text>
                <Button title="Go to Profile" onPress={() => navigate('Profile')} />
                <Button title="Go to Review" onPress={() => navigate('Review')} />
                <Button title="Go to History" onPress={() => navigate('History')} />
                <Button title="Go to Security" onPress={() => navigate('Security')} />
            </View>
        );
    }    
}