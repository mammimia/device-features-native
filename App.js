import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import IconButton from './components/ui/IconButton';
import { Colors } from './constants/colors';
import AddPlace from './screens/AddPlace';
import AllPlaces from './screens/AllPlaces';
import PickOnMap from './screens/PickOnMap';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary500
            },
            headerTintColor: Colors.gray700,
            cardStyle: {
              backgroundColor: Colors.gray700
            }
          }}
        >
          <Stack.Screen
            name="all-places"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: 'Your Favorite Places',
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate('add-place')}
                />
              )
            })}
          />
          <Stack.Screen
            name="add-place"
            component={AddPlace}
            options={{
              title: 'Add a New Place'
            }}
          />
          <Stack.Screen
            name="map"
            component={PickOnMap}
            options={{
              title: 'Pick a Location on the Map'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
