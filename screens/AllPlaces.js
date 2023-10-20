import { StyleSheet } from 'react-native';
import PlacesList from '../components/places/PlacesList';
import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { fetchPlaces } from '../database/Database';

function AllPlaces() {
  const isFocused = useIsFocused();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    async function loadPlaces() {
      const dbPlaces = await fetchPlaces();
      setPlaces(dbPlaces);
    }

    if (isFocused) {
      loadPlaces();
    }
  }, [isFocused]);

  return <PlacesList places={places} />;
}

const styles = StyleSheet.create({});

export default AllPlaces;
