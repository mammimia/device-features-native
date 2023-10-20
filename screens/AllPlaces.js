import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import PlacesList from '../components/places/PlacesList';
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

export default AllPlaces;
