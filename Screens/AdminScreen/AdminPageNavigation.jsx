import * as React from 'react';
// import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeAdminScreen from './HomeAdminScreen';
import RiwayatAntrianScreen from './RiwayatAntrianScreen';
import KelolaAntrianPage from './KelolaAntrianPage';
import KelolaUserScreen from './KelolaUserScreen';
import { hijau } from '../../Assets/StylingComponent/Coloring';

const Tab = createBottomTabNavigator();


function AdminPageNavigation({navigation, route}) {
  const {
    IdU,
    Levels,
    Username,
    Password,
    JenisKelamin,
    Nama,
    TglLahir,
    NomorTelp,
    NIK,
    Email,
    NomorKK,
    FotoProfile,
    WaktuRegister,
    systemAntrian,
  } = route.params;
 
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({route}) => ({
        headerStyle: {backgroundColor: '#42f44b'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
        tabBarActiveTintColor: hijau,
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case "HomeAdminScreen":
                iconName = focused ? 'home-circle' : 'home-circle-outline';    
                break;
            case 'RiwayatAntrianScreen':
                iconName = focused
              ? 'history'
              : 'history';
                break;          
            case 'KelolaUserScreen':
                iconName = focused
              ? 'account-settings'
              : 'account-settings-outline';
                break;          
            case 'KelolaAntrianPage':
                iconName = focused
              ? 'view-list'
              : 'view-list';
                break;          
            default:
                break;
          }          
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}>
      <Tab.Screen
        name="HomeAdminScreen"
        component={HomeAdminScreen}
        initialParams={{
          IdU,
          Levels,
          Username,
          Password,
          JenisKelamin,
          Nama,
          TglLahir,
          NomorTelp,
          NIK,
          Email,
          NomorKK,
          FotoProfile,
          WaktuRegister,
          systemAntrian,
        }
          
        }
        options={{
          tabBarLabel: 'Home',
          title: 'Home', headerShown: false
        }}
      />
      <Tab.Screen
        name="RiwayatAntrianScreen"
        component={RiwayatAntrianScreen}
        options={{
          tabBarLabel: 'Riwayat Antrian',
          title: 'Riwayat', headerShown: false
        }}
      />
      <Tab.Screen
        name="KelolaUserScreen"
        component={KelolaUserScreen}
        options={{
          tabBarLabel: 'Kelola User',
          title: 'Kelola User', headerShown: false
        }}
      />
      <Tab.Screen
        name="KelolaAntrianPage"
        component={KelolaAntrianPage}
        options={{
          tabBarLabel: 'Antrian',
          title: 'Antrian', headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}
export default AdminPageNavigation;
