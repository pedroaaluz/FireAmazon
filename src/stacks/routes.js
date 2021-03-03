import React from 'react';
import {createStackNavigator,} from '@react-navigation/stack';
import MainTab from './MainTab';
import Alert from './../pages/alert';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator()

export default () =>(
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="MainTab"
            screenOptions={{
                headerShown: false
            }}
        >

            <Stack.Screen name="MainTab" component={MainTab} />
            <Stack.Screen name="Alert" component={Alert} />

        </Stack.Navigator>
    </NavigationContainer>
)