import {View, Text, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React, {useState} from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import HeaderCloud from './Components/HeaderCloud';
import MeterialIcon from 'react-native-vector-icons/MaterialIcons';
import {stylesDariGaya} from './Components/Gayaaja';
import {putih} from '../Assets/StylingComponent/Coloring';
import axios from 'axios';
import {ipAdress} from './Components/Url';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler/lib/typescript/components/touchables';
// import { Keyboard } from 'react-native/Libraries/Components/Keyboard/Keyboard';

const LoginAdmin = ({navigation}) => {
  // *Login state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // login function
  async function loginFunc() {
    try {
      // console.log(username, password);
      const res = await axios({
        method: 'POST',
        data: {
          Username: username,
          Password: password,
        },
        url: `${ipAdress}/aplikasiLayananAkta/LoginAdmin.php`,
        headers: {'Content-Type': 'multipart/form-data'},
      });
      const {value, IdAdmin} = res.data;
      if (value == 1) {
        alert('Berhasil Login');
        console.log('ini adalah id admin', IdAdmin);
        navigation.navigate('AdminPageNavigation', {idUser: IdAdmin});
        // AsyncStorage.setItem('userNameAdmin', username);
        // AsyncStorage.setItem('idUser', IdAdmin);
   
      } else {
        alert('Login gagal');
      }
    } catch (error) {
      alert('Gagal Login');
      console.log(error);
    }

  }
  // styling keyboard 
  

  return (
  
    <KeyboardAvoidingView  style={[{ flex: 1, backgroundColor: putih}]}>
      <ScrollView style={[{flex: 1}]}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

       
    <View style={[{flex: 1, }]}>
      <HeaderCloud />
      {/* wrapSemuaContent */}
      <View style={[stylesDariGaya.paddingDef, {flex: 1}]}>
        {/* button Kembali */}

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: -20,
          }}>
          <MeterialIcon
            style={{marginTop: 6}}
            color={'#24CE9E'}
            name="arrow-back-ios"
          />

          <Text
            style={[
              stylesDariGaya.textDef,
              stylesDariGaya.TextMediumBold,
              {color: '#24CE9E'},
            ]}>
            Kembali
          </Text>
        </TouchableOpacity>

        {/* Login Admin Text */}
      {/* container content */}
        <View style={[{flex: 1, backgroundColor: 'lavender'}]}>
        <View style={{alignItems: 'center', marginTop: 50}}>
          <Text style={[stylesDariGaya.TextBold, {letterSpacing: 2}]}>
            Login Admin
          </Text>
        </View>
        {/* Form Login */}
   
          <View>
            <Text>Username</Text>
            <TextInput
              onChangeText={e => setUsername(e)}
              value={username}
              style={stylesDariGaya.formInput}
            />
          </View>
          <View style={{marginTop: 30}}>
            <Text>Password</Text>
            <TextInput
              onChangeText={e => setPassword(e)}
              value={password}
              style={stylesDariGaya.formInput}
            />
          </View>
 
        {/* Tombols */}
        <View style={{alignItems: 'center', marginTop: 30,}}>
          <TouchableOpacity
            onPress={async () => {
              try {
                await loginFunc();
              } catch (error) {}
            }}
            style={stylesDariGaya.Tombols}>
            <Text style={[stylesDariGaya.textCenter, {color: '#fff'}]}>
              Login
            </Text>
          </TouchableOpacity>
        </View>

       
        </View>
        {/* tombol login admin dan Buat AKun */}
      </View>
    </View>
    </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>

  );
};

export default LoginAdmin;
