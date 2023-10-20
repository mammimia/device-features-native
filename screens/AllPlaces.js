import { StyleSheet } from 'react-native';
import PlacesList from '../components/places/PlacesList';
import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';

function AllPlaces({ route }) {
  const isFocused = useIsFocused();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    if (isFocused && route.params) {
      setPlaces((places) => [...places, route.params.place]);
    }
  }, [isFocused, route]);

  return <PlacesList places={places} />;
}

const styles = StyleSheet.create({});

export default AllPlaces;
