import { View, Text, StyleSheet, FlatList } from 'react-native';
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
    fontSize: 16
  }
});

export default PlacesList;
