// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './Screens/LandingPage';
import HomeUmum from './Screens/UmumScreen/HomeUmum';
import LoginU from './Screens/LoginU';
import SyaratScreen from './Screens/UmumScreen/SyaratScreen';
import PemberitahuanScreen from './Screens/UmumScreen/PemberitahuanScreen';
import ProfileUmumScreen from './Screens/UmumScreen/Profile';
import Home from './Screens/Home';
import MenuUmum from './Screens/Components/MenuUmum';
import AntrianLayananScreen from './Screens/UmumScreen/AntrianLayananScreen';
import LoginAdmin from './Screens/LoginAdmin';
import FormBuatAkunScreen from './Screens/FormBuatAkunScreen';
import BuatAntrian from './Screens/UmumScreen/BuatAntrian';
import AdminPageNavigation from './Screens/AdminScreen/AdminPageNavigation';
import DetailAntrian from './Screens/AdminScreen/DetailAntrian';
import DownloadFormulirScreen from './Screens/AdminScreen/DownloadFormulirScreen';
import ProfileAdminScreen from './Screens/AdminScreen/ProfileAdminScreen';
import EditDataUserUmum from './Screens/AdminScreen/EditDataUserUmum';
import SplashScreen from './Screens/SplashScreen';
import Logins from './Screens/Logins';
import SesionScreen from './Screens/SesionScreen';
import ProfileScreen from './Screens/ProfileScreen';
import Profile from './Screens/UmumScreen/Profile';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}  initialRouteName='SesionScreen'>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SesionScreen" component={SesionScreen} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Logins" component={Logins} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeUmum" component={HomeUmum} />
        <Stack.Screen name="LoginU" component={LoginU} />
        <Stack.Screen name="SyaratScreen" component={SyaratScreen} />
        <Stack.Screen name="PemberitahuanScreen" component={PemberitahuanScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="MenuUmum" component={MenuUmum} />
        <Stack.Screen name="AntrianLayananScreen" component={AntrianLayananScreen} />
        <Stack.Screen name="LoginAdmin" component={LoginAdmin} />
        <Stack.Screen name="FormBuatAkunScreen" component={FormBuatAkunScreen} />
        <Stack.Screen name="BuatAntrian" component={BuatAntrian} />
        <Stack.Screen name="AdminPageNavigation" component={AdminPageNavigation} />
        <Stack.Screen name="DetailAntrian" component={DetailAntrian} />
        <Stack.Screen name="DownloadFormulirScreen" component={DownloadFormulirScreen} />
        <Stack.Screen name="ProfileAdminScreen" component={ProfileAdminScreen} />
        <Stack.Screen name="EditDataUserUmum" component={EditDataUserUmum} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;