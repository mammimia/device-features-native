import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import AddPlace from './screens/AddPlace';
import AllPlaces from './screens/AllPlaces';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="all-places" component={AllPlaces} />
          <Stack.Screen name="add-place" component={AddPlace} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
