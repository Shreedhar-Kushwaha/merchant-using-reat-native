import React from 'react';
import { Image, View, StyleSheet } from 'react-native';


import colors from '../config/colors';
import AppText from './AppText';
import ListItem from './ListItem';

function ListingDetailsScreen({ route }) {
    const listing = route.params;

    return (
        <View>
            <Image style = {styles.image} source = {listing.image} />
            <View style = {styles.detailsContainer}>
                <AppText style = {styles.title}>{ listing.title }</AppText>
                <AppText style = {styles.price}>${ listing.price }</AppText>
                <View style = {styles.userContainer}>
                    <ListItem image = {require('../assets/mosh.jpg')} title = "Mosh Hamedani" subTitle = "5 Listing" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer : {
        padding : 20,

    },

    price : {
        color : colors.secondary,
        fontWeight : "bold",
        fontSize : 20,
        marginVertical : 10
    },
    image : {
        width : "100%",
        height : 300,
    },
    title : {
        fontSize : 24,
        fontWeight : "500",
    },
    userContainer : {
        marginVertical : 40,
    }
})

export default ListingDetailsScreen;