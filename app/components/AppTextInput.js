import React from 'react';
import { TextInput, View,StyleSheet, Platform } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import defaultstyles from '../config/styles';


function AppTextInput({icon, width = '100%', ...otherProps }) {
    return (
        <View style = {[styles.container, { width}]}>
            {icon && <MaterialCommunityIcons name = {icon} size = {20} color = {defaultstyles.colors.medium} style = {styles.icon} />}
            <TextInput placeholderTextColor = {defaultstyles.colors.medium} style = {defaultstyles.text} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : defaultstyles.colors.light,
        borderRadius : 25,
        flexDirection : 'row',

        padding : 15,
        marginVertical : 10,
        alignItems : 'center',
    },
    icon : {
        marginRight : 10,
    },
})

export default AppTextInput;