import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PurchasedServicesScreen from '../PurchasedServicesScreen';
import AdditionalServices from '../AdditionalServices';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="PurchasedServices"
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarIndicatorStyle: {backgroundColor: '#9e8211'},
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: 'white'},
      }}>
      <Tab.Screen
        name="PurchasedServices"
        component={PurchasedServicesScreen}
        options={{tabBarLabel: 'Purchased Services'}}
      />
      <Tab.Screen
        name="ADDITIONAL SERVICES"
        component={AdditionalServices}
        options={{tabBarLabel: 'ADDITIONAL SERVICES'}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
