import { createDrawerNavigator } from '@react-navigation/drawer';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();
import Setting from './structure/screens/Setting';
import Home from './structure/screens/Home';
import { Provider } from 'react-redux';
import store from './structure/stroe';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const Stack = createNativeStackNavigator();
export default function MyDrawer() {
  
let persistor = persistStore(store);

const config={
  screens :{
    Home :{
      path :"Home"
    }
  }
}
const linking = {
prefixes :['NewsApp://'],
config
}
  return (
    <Provider store={store} >
    <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer linking={linking} >
    <Drawer.Navigator initialRouteName='Home' screenOptions={{headerShown:false}} >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>



    </NavigationContainer>

    </PersistGate>

</Provider>
  );
}