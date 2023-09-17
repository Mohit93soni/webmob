import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TabNavigator from './TabNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'black',
        headerStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{
          title: 'Services',

          headerLeft: () => <Icon name="menu" size={30} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
