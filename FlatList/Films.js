import React from 'react'
import { ActivityIndicator,Button, View } from 'react-native-web'
import { FlatList, Text } from 'react-native'
import FilmsRow from './FilmsRow'
import { TouchableOpacity } from 'react-native'

const _renderHeader = () => (
    <View style={{ height: 30, backgroundColor: '#4fc3f7', justifyContent: 'center' }}>
      <Text>Header</Text>
    </View>
  )

const _renderFooter = isFetching => {
    if (isFetching) {
      return <ActivityIndicator size="large" animating={true} color="#4fc3f7" style={{ marginBottom: 12 }} />
    }
    return null
  }

const _renderItem = ({ item }) => (
  <FilmsRow title={item.Title} 
    year={item.Year} 
    genre={item.Genre}   
    director={item.Director} 
    />
  )

const _renderSeparator = () => <View style={{ height: 1, backgroundColor: 'grey', marginLeft: 80 }} />

const _renderEmpty = () => (
  <View style={{ height: 40, alignItems: "center", justifyContent: "center" }}>
    <Text>Aucun résultat</Text>
  </View>
);

let Films;
export default Films = props => 
<FlatList data={props.data} 
renderItem={_renderItem} 
keyExtractor={item => item.imdbID} 
ItemSeparatorComponent={_renderSeparator}
ListHeaderComponent={_renderHeader}
ListFooterComponent={_renderFooter}
ListEmptyComponent={_renderEmpty} 
/>

