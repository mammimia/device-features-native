import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import AddPlace from './screens/AddPlace';
import AllPlaces from './screens/AllPlaces';
import IconButton from './components/ui/IconButton';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="all-places"
            component={AllPlaces}
            options={({ navigation }) => ({
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
          <Stack.Screen name="add-place" component={AddPlace} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
