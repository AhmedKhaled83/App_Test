import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Detalies_news from '../screens/Detalies_news';
const Navigation_screen = () => {
  const Stack = createNativeStackNavigator();
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}
        >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detalies_news" component={Detalies_news} />
    
        
      </Stack.Navigator>
  );
};

export default Navigation_screen;
