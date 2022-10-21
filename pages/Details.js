import { TabRouter } from "@react-navigation/native";
import React, { useState } from "react";
import { render } from "react-dom";
import {Button, Text, View, FlatList, Image, ScrollView, setNoteMovie, TouchableOpacity, SafeAreaView, TextInput} from "react-native";
//import { TextInput, TouchableOpacity } from "react-native-web";
import Home from "./Home";
import Liste from "./Liste";



function Details({ route, navigation }) {

    const itemClicked = route.params.paramKey;

    const [defaultRating, setDefaultRating] = useState(0);
    const [maxRating, setMaxRating] = useState([1,2,3,4,5]);

    const filledStar = require('./filledStar.png')
    const emptyStar = require('./emptyStar.png')

    const BarStar = () => {
        return(<View style={{ flex:1, flexDirection:"row" }}>
        {
        maxRating.map((item, key) => {
            return(
            <TouchableOpacity 
                style={{flex:1, flexDirection:"row"}}
                activeOpacity={0.7} 
                key={item} 
                onPress= {()=>setDefaultRating(item)} 
                >
                <Image 
                    source={ 
                        item <= defaultRating
                            ?{uri:filledStar}
                            :{uri:emptyStar}
                            }
                            style={{width:50, height:50}}>
                </Image>
                
            </TouchableOpacity>
        )})}

    </View>)
    
    }

    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={{fontSize: 25, marginBottom: 30, fontWeight: 'bold', color: 'dodgerblue'}}>DETAILS DU FILM</Text> 
           
            <View style={{height: 350, marginBottom: 50}} >
                <ScrollView>
                    <Image source = {{uri: itemClicked.Images[0], width: 400, height: 200}}></Image>
                    <Text style={{ fontSize: 30 }}>Titre : {itemClicked.Title}</Text>
                    <Text style={{ fontSize: 30 }}>Année : {itemClicked.Year}</Text>
                    <Text style={{ fontSize: 30 }}>Genre : {itemClicked.Genre}</Text>
                    <Text style={{ fontSize: 30 }}>Acteurs principaux : {itemClicked.Actors}</Text>
                    <Text style={{ fontSize: 30 }}>Metascore : {itemClicked.Metascore}</Text>
                    <Text style={{ fontSize: 30 }}>imdbRating : {itemClicked.imdbRating}</Text>
                    <Text style={{ fontSize: 30 }}>imdbVotes : {itemClicked.imdbVotes}</Text>
                </ScrollView>
            </View>

            <SafeAreaView >
                <Text style={{marginBottom:15, color:'dodgerblue', fontWeight:"bold", marginLeft:85 }}>Notez le film</Text>
                <BarStar/>
            </SafeAreaView>
            
            <View style={{ padding: 25 }}>
                <Button title="Page d'Accueil" onPress={() => navigation.navigate('Home', { name: 'Home' })} />
                </View>
                <View>
                <Button title="Retour" onPress={() => navigation.navigate('Liste', { name: 'Liste' })} />
                </View>

        </View>
    
    );
}

export default Details;

