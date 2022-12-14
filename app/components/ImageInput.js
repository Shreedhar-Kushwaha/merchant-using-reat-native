import React, {useEffect } from 'react';
import {Image, View, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import colors from '../config/colors';
import Icon from './Icon';


function ImageInput({imageUri, onChangeImage}) {

    useEffect(() => {
        requestPermission();
    }, [])

    const requestPermission = async () => {
        const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(!granted)
          alert('You need to enable permission to access the library. ')
      };

    const handlePress = () => {
        if(!imageUri) selectImage();
        else Alert.alert('Delete', 'Are You sure you want to delete ythis image ?', [
            { text : 'yes', onPress : () => onChangeImage(null) },
            { text : 'No'}
        ])
    }

    const selectImage = async() => {
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes : ImagePicker.MediaTypeOptions.Images,
              quality : 0.5
          });
          if(!result.cancelled)
            onChangeImage(result.uri)
        } catch (error) {
          console.log('Error reading an image', error);
        }
      }

    return (
        <TouchableWithoutFeedback onPress = {handlePress}>
            <View style = {styles.container}>
                {!imageUri && <Icon name = "camera" backgroundColor = {colors.light} iconColore = {colors.medium}  />}
                {imageUri && <Image source = {{ uri : imageUri }} style = {styles.image } />}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        backgroundColor : colors.light,
        borderRadius : 15,
        height : 100,
        justifyContent : 'center',
        overflow : 'hidden',
        width : 100,
    },
    image : {
        height : '100%',
        width : '100%',
    }
})

export default ImageInput;