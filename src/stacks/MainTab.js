import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Map from './../pages/map';
import AlertFire from './../pages/alertFire';
import CustomTabBar from './CustomTab';

const Tab = createBottomTabNavigator();

export default () => (

    <Tab.Navigator tabBar={props=>< CustomTabBar {...props}/>}>
        
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="AlertFire" component={AlertFire} />
        
    </Tab.Navigator>

)