import React, { Component } from 'react';
import Liste from './Liste';
import Details from './Details';
 
import { ActivityIndicator, Alert, FlatList, Text, StyleSheet, View, TextInput, Button, navigation } from 'react-native';
 
export default class FilteredBar extends Component {

 
  constructor(props) {
 
    super(props);
 
    this.state = {
      isLoading: true,
      text: '',
      data: []
    }
 
    this.arrayholder = [];
  }
 
  componentDidMount() {
 
    return fetch('https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON')
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        this.setState({
          isLoading: false,
          data: responseJson,
        }, () => {
          // In this block you can do something with new state.
          this.arrayholder = responseJson;
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
 
  GetFlatListItem(Title) {
    Alert.alert(Title);
  }
 
  searchData(text) {
    const newData = this.arrayholder.filter(item => {
      const itemData = item.Title.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1
    });
 
    this.setState({
      data: newData,
      text: text
      })
    }
 
    itemSeparator = () => {
      return (
        <View
          style={{
            height: .5,
            width: "100%",
            backgroundColor: "#000",
          }}
        />
      );
    }
 
    render() {

        const { navigation } = this.props;

      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }
   
      return (
   
        <View style={styles.MainContainer}>
   
        <TextInput 
         style={styles.textInput}
         onChangeText={(text) => this.searchData(text)}
         value={this.state.text}
         underlineColorAndroid='transparent'
         placeholder="Rechercher un film" />

        

        <FlatList
          data={this.state.data}
          keyExtractor={ (item, index) => index.toString() }
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={({ item }) => 
          <Text style={styles.liste}
          onPress={this.GetFlatListItem.bind(this, item.Title)} 
          >
            {item.Title + ' - sortie en : ' + item.Year} {item.Genre} {'avec ' + item.Actors} {' - réalisé par ' + item.Director}  
                <View style={{marginLeft:50}}>
                <Button   title="Voir Détails"
                          color="dodgerblue" 
                          style = {styleList.buttonDetails}
                          onPress={() => navigation.navigate('Details', {name: Details, paramKey: item})}>
                </Button> 
                </View>
          </Text>}
          style={styles.liste}  />
          
 
        </View>
    );
  }
}



const styleList = StyleSheet.create({
    row: { flexDirection: 'row', alignItems: 'center', padding: 12 },
    picture: { width: 50, height: 50, borderRadius: 25, marginRight: 18 },
    primaryText: {
      fontWeight: 'bold',
      fontSize: 30,
      color: 'black',
      marginBottom: 4,
    },
    secondaryText: { marginBottom:4 },
    buttonDetails: {width: 140, marginBottom: 25, marginLeft: 50},
  })
 
const styles = StyleSheet.create({

  liste:{
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
    fontSize: 18,
    padding: 12,
    color:"dodgerblue"
  },  
 
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 5,
 
  },
 
  row: {
    fontSize: 18,
    padding: 12
  },
 
  textInput: {
 
    textAlign: 'center',
    height: 42,
    borderWidth: 1,
    borderColor: 'dodgerblue',
    borderRadius: 8,
    backgroundColor: "#FFFF"
 
  }
});