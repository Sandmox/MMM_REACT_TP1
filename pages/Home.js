import React from 'react';
import {Button, Text, View} from "react-native";

function Home({ navigation }) {

    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{margin: 70}}>
            <Button  title="Démarrer" onPress={() => navigation.navigate('Liste', { name: 'Liste' })} />
            </View>
            <Button title="Démarrer avec une barre de filtre" onPress={() => navigation.navigate('FilteredBar', { name: 'FilteredBar' })} />
        </View>
    );
}

export default Home;