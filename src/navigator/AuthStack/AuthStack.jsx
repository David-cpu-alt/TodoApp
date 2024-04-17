import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signin from '../../screens/Authscreen/signin/Signin';

const AuthStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="signin" component={Signin} />
        </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})