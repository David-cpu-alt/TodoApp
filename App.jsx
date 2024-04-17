import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigator/Appstack/AppStack';
import reduxStore from './src/redux/store';
import { Provider } from 'react-redux'
import AuthStack from './src/navigator/AuthStack/AuthStack';

const App = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Provider store={reduxStore}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='AuthStack' component={AuthStack} />
                    <Stack.Screen name="home" component={AppStack} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App

const styles = StyleSheet.create({})