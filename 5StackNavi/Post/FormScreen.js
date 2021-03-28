import React from 'react';
import { SafeAreaView, Button, Text, View, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import { NavigationContainer } from '@react-navigation/native';

const FormScreen = () => {
	let openImage = async () => {
		let permission = await ImagePicker.requestCameraRollPermissionsAsync();
		
		let picker = await ImagePicker.launchImageLibraryAsync()
		console.log(picker)
	}
	const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
	return (
		<SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder="Describe your goods"
                value={text}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Price"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Phone number"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder="Email"
                value={text}
            />
            <TouchableOpacity>
				<Button title="Upload picture from your Phone" onPress={openImage} />
			</TouchableOpacity>            
        </SafeAreaView>
	);
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});

export default FormScreen;