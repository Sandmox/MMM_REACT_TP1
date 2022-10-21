import React from 'react';
import Home from "./pages/Home";
import Liste from "./pages/Liste";
import Details from "./pages/Details";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FilteredBar from './pages/FilteredBar';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Liste" component={Liste} />
                    <Stack.Screen name="Details" component={Details} />
                    <Stack.Screen name="FilteredBar" component={FilteredBar} />
                </Stack.Navigator>
            </NavigationContainer>
    );

   // const styles = StyleSheet.create({ container: { flex: 1, paddingTop: 20 } })
}
