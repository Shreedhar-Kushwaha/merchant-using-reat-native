import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function NewListingButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style = {styles.container}>
                <MaterialCommunityIcons name = "plus-circle" size = {40} color={colors.white} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container : {
        alignItems:'center',
        backgroundColor : colors.primary,
        borderColor:colors.white,
        borderRadius:35,
        borderWidth:10,
        bottom:20,
        height:70,
        justifyContent:'center',
        width:70,

    }
})

export default NewListingButton;