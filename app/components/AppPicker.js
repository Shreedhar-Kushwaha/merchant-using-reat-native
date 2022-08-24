import React, {useState} from 'react';
import { TextInput, View,StyleSheet, Platform, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import defaultstyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItemComponent from './PickerItem';
import PickerItem from './PickerItem';


function AppPicker({icon, items,numberOfColumns = 1, onSelectItem, PickerItemComponent = PickerItem, placeholder, selectedItem, width= "100%"}) {
const [modalVisible, setModalVisible] = useState(false)

    return (
        <>

            <TouchableWithoutFeedback onPress = {() => setModalVisible(true)}>
                <View style = {[styles.container, {width}]}>
                    {icon && <MaterialCommunityIcons name = {icon} size = {20} color = {defaultstyles.colors.medium} style = {styles.icon} />}
                    {selectedItem ? (<AppText style = {styles.text}>{selectedItem.label}</AppText> ): (<AppText style = {styles.placeholder}>{placeholder}</AppText>)}

                    <MaterialCommunityIcons name = "chevron-down" size = {20} color = {defaultstyles.colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible = {modalVisible} animationType = "slide" >
                <Screen>
                    <Button title = "Close" onPress = {() => setModalVisible(false)} />
                    <FlatList
                        data = {items}
                        keyExtractor = {(item) => item.value.toString() }
                        numColumns = {numberOfColumns}
                        renderItem = {( { item }) =>
                            <PickerItemComponent 
                                item = {item}
                                label = {item.label}
                                onPress = {() =>  {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                            /> }
                    />
                </Screen>
            </Modal>

        </>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : defaultstyles.colors.light,
        borderRadius : 25,
        flexDirection : 'row',
       // width : "100%",
        padding : 15,
        marginVertical : 10,
        alignItems : 'center',
    },
    icon : {
        marginRight : 10,
    },
    placeholder : {
        color : defaultstyles.colors.medium,
        flex : 1,
    },
    text : {
        flex: 1,
    }
})

export default AppPicker;