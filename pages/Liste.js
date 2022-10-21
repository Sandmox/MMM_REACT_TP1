import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Button, FlatList, SafeAreaView, StyleSheet, Text, View, } from "react-native";
import Films from "../FlatList/Films";
import Details from './Details';
import FilteredBar from './FilteredBar';


function Liste({ navigation }) {
const [data, setData] = useState([]);
const [filteredData, setFilteredData] = useState([]);
const [isLoading, setLoading] = useState(true);

  
async function fetchData() {
    const uri = "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON";
    try{
        const response = await fetch(uri);
        const jsondata = await response.json();
        setData(jsondata);
    }
    catch(error){console.error();}
    setLoading(false);
}
 
  
/*async function loadData(page) {
    this.setState({
        page: nextPage,
        data: [...this.state.data, ...data],
        isFetching: false,
        hasMoreResult: nextPage <= this.state.totalPage,
      });
    const data = await this.fetchData(page);
    const nextPage = page + 1;
    this.setState({page: nextPage,data: [...this.state.data, ...data],isFetching: false,});
  }

async function componentDidMount() {
    await this.loadData(this.state.page);
 }*/

 const styles = StyleSheet.create({
    row: { flexDirection: 'row', alignItems: 'center', padding: 12 },
    picture: { width: 50, height: 50, borderRadius: 25, marginRight: 18 },
    primaryText: {
      fontWeight: 'bold',
      fontSize: 30,
      color: 'black',
      marginBottom: 4,
    },
    secondaryText: { marginBottom:4 },
    buttonDetails: {width: 150, marginBottom: 25},
  })
  
 useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={{alignItems: 'center'}}>
            <Text style={styles.primaryText}>{item.Title} </Text>
            <Text style={styles.secondaryText}>Date de sortie : {item.Year} </Text>
            <Text style={styles.secondaryText}>{'Type : ' + item.Genre}</Text>
            <Text style={styles.secondaryText}>{'Directeur : ' + item.Director}</Text>
            <View style={styles.buttonDetails}>
            <Button
            title="Voir détails"
            onPress={() => navigation.navigate('Details', {name: Details, paramKey: item})}
            />
            </View>
        </View>
      )}
      
    />
    
  );
  
}

export default Liste;