import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect  } from 'react';
import {Image, StyleSheet, Text, TextInput, View, Switch, Button } from 'react-native';
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import AppButton from './app/components/AppButton';
import AccountScreen from './app/screens/AccountScreen';
import AppPicker from './app/components/AppPicker';
import AppText from './app/components/AppText/';
import AppTextInput from './app/components/AppTextInput';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import ListingDetailsScreen from './app/components/ListingDetailsScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import ListItem from './app/components/ListItem';
import LoginScreen from './app/screens/LoginScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

const Link = () => {
  const navigation = useNavigation();
  return (
  <Button
    title = "Click"
    onPress = { () => navigation.navigate("TweetDetails", {id : 1}) }
  />
)
}

const Tweets = ({navigation}) => (
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
);

const Tweetdetails = ({navigation, route}) => (
  <Screen>
    <Text>Tweet details {route.params.id} </Text>
    <Button title = "go to Tweet Screen" onPress = { () => navigation.navigate('Tweets')} />
  </Screen>
);

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions = {{
    headerStyle : {backgroundColor : "dodgerblue"},
    headerTintColor : "white",
  }}>
    <Stack.Screen  name = "Tweets" component = {Tweets} options = {{headerStyle : {backgroundColor : "tomato"},
    headerTintColor : "white",
  }} />
    <Stack.Screen  name = "TweetDetails" component = {Tweetdetails}  options = {({route}) => ({title : route.params.id})} />
  </Stack.Navigator>
)

const Account = () => <Screen><Text>Account</Text></Screen>

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator 
    tabBarOptions = {{
      activeBackgroundColor : "tomato",
      activeTintColor : "white",
      inactiveBackgroundColor : "#eee",
      inactiveTintColor : "black",
    }}
  >
    <Tab.Screen name = "Feed" component = {FeedNavigator} options = {{ tabBarIcon : ({size, color}) => <MaterialCommunityIcons name="home" size = {size} color = {color} /> }} />
    <Tab.Screen name = "Account" component = {Account} />
  </Tab.Navigator>
)


const Main = () => (
  <Tab.Navigator screenOptions = {{headerShown : "false"}}>
    <Tab.Screen 
      name = "Feed" 
      component = {ListingsScreen } 
      options = {
        { tabBarIcon : ({size, color}) => <MaterialCommunityIcons name="home" size = {size} color = "tomato" /> }
      }
    
    />
    <Tab.Screen 
      name = "pages" 
      component = {ListingEditScreen } 
      options = {
        { tabBarIcon : ({size, color}) => <MaterialIcons name="add-circle" size = {70} color = {color} /> }
      }
    />
    <Tab.Screen 
      name = "Account" 
      component = {AccountScreen } 
      options = {
        { tabBarIcon : ({size, color}) => <MaterialCommunityIcons name="account" size = {size} color = {color} /> }
      }
    />
  </Tab.Navigator>
)


export default function App() {
  
  return (
    <NavigationContainer theme = { navigationTheme }>
      <AppNavigator />
    </NavigationContainer>
  );
}
