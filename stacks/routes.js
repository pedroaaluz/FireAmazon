import React from 'react';
import {createStackNavigator,} from '@react-navigation/stack';
import Map from './../src/pages/map';
import Alert from './../src/pages/alert';

import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator()

export default () =>(
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Map"
            screenOptions={{
                headerShown: false
            }}
    
        >

            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="Alert" component={Alert} />
           

        </Stack.Navigator>
    </NavigationContainer>
)