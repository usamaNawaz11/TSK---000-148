import { StyleSheet, Text, View } from 'react-native';
import Signup from '../Screen/Signup'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screen/Home';
import About from "../Screen/About";
import Contact from "../Screen/Contact";
import InternList from "../Screen/InternList";

import { createDrawerNavigator } from '@react-navigation/drawer';
import Userdata from '../Screen/Userdata';
import Cart from '../Screen/Cart';
export default function Internee() {
  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='signup' screenOptions={{headerTitleAlign:"left"}} >
        <Stack.Screen  component={Signup} name='signup' options={{headerShown: false}} />
        <Stack.Screen  component={HomeDrawer} name='home' options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{headerTintColor:"black", headerTitleAlign:"left"}}>
      <Drawer.Screen name="home" component={Home} />
      <Drawer.Screen name="about" component={About} />
      <Drawer.Screen name="intern" component={InternList} />
      <Drawer.Screen name="Users" component={Userdata} />
      <Drawer.Screen name="Cart" component={Cart} />

    </Drawer.Navigator>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
