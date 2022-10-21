import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet, Button } from 'react-native'
import DetailFilm from './DetailFilm'


const FilmsRow = props => (
  <View style={styles.row}>
    <Image style={styles.picture} source={{ uri: props.Poster }} />
    <View>
      <Text style={styles.primaryText}>{props.title + ' - sortie en : ' + props.year}</Text>
      <Text style={styles.secondaryText}>{'Type : ' + props.genre}</Text>
      <Text style={styles.secondaryText}>{'Directeur : ' + props.director}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', padding: 12 },
  picture: { width: 50, height: 50, borderRadius: 25, marginRight: 18 },
  primaryText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
  },
  secondaryText: { color: 'grey' },
})

export default FilmsRow;