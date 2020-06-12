import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import State from './pages/State';

const AppStack = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator headerMode='none' initialRouteName='Home'>
                <AppStack.Screen name='Home' component={Home} />
                <AppStack.Screen name='State' component={State} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}