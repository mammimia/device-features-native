import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/colors';
import PlaceItem from './PlaceItem';

function PlacesList({ places }) {
  if (places == null || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places found. Maybe add some!
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      renderItem={({ item }) => <PlaceItem place={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200
  }
});

export default PlacesList;
