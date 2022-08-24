import React, {useState} from 'react';
import {View, FlatList, StyleSheet } from 'react-native';


import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeperator from '../components/ListItemSeperator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';


const initialmessages = [
    {
        id : 1,
        title : 'T1',
        description : 'D1',
        image : require('../assets/mosh.jpg')
    },
    {
        id : 2,
        title : 'T2',
        description : 'D2',
        image : require('../assets/mosh.jpg')
    },
]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialmessages);
    const [refreshing, setRefreshing] = useState(false);
    const handelDelete = message => {
        setMessages(messages.filter(m => m.id != message.id));
    }

    return (
        <Screen>
            <FlatList 
            data = {messages} 
            keyExtractor = {message => message.id.toString()} 
            renderItem = {({item}) => (
                 <ListItem 
                    title = {item.title} 
                    subTitle = {item.description} 
                    image = {item.image}
                    onPress = {()=>console.log("Message selected", item)} 
                    renderRightActions = { () => 
                        <ListItemDeleteAction onPress = {() => handelDelete(item)} /> }
                    />
                    )} 
                    ItemSeparatorComponent = { ListItemSeperator}
                    refreshing = {refreshing}
                    onRefresh = {() => {
                        setMessages([
                            {
                                id : 2,
                                title : 'T2',
                                description : 'D2',
                                image : require('../assets/mosh.jpg')
                            },
                        ])
                    }}
                />
        </Screen>
    );
}

export default MessagesScreen;