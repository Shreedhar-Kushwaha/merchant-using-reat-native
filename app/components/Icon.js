import React from 'react';
import { View, StyleSheet } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';

function Icon({
    name,
    size = 40,
    backgroundColor = "#000",
    iconColore = "#fff"
}) {
    return (
        <View style = {{
            width : size,
            height : size,
            borderRadius : size/2,
            backgroundColor,
            justifyContent :'center',
            alignItems : 'center',
        }}>
            <MaterialCommunityIcons  name = {name} color = {iconColore} size = {size * 0.5} />
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        
    }
})

export default Icon;