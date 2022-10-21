import { TouchableOpacity } from "react-native";

const DetailFilm = () => (
<TouchableOpacity title="Détails" 
      onPress={() => 
      navigation
      .navigate('Details', { name: 'Details' })} />
      
);