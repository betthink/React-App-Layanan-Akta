import {View, Text, TouchableOpacity, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import HeaderCloud from './Components/HeaderCloud';
import MeterialIcon from 'react-native-vector-icons/MaterialIcons';
import {stylesDariGaya} from './Components/Gayaaja';
import {hijau, putih} from '../Assets/StylingComponent/Coloring';
// import { AuthContext } from './Components/AuthContext';
import axios from 'axios';
import {ipAdress} from './Components/Url';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Logins = ({navigation}) => {
  const [UsernameHook, setUsernameHook] = useState('');
  const [PasswordHook, setPasswordHook] = useState('');

  // })

  // * test
  // const urlLogin = `${ipAdress}/aplikasiLayananAkta/LoginUmum.php`;
  async function loginFunc() {
    if (!UsernameHook) {
      alert('masukan username anda!');
      return;
    } else if (!PasswordHook) {
      alert('masukan password anda!');
      return;
    }
    try {
      // console.log(UsernameHook, PasswordHook);
      const res = await axios({
        method: 'POST',
        data: {
          Username: UsernameHook,
          Password: PasswordHook,
        },
        url: `${ipAdress}/aplikasiLayananAkta/Login.php`,
        headers: {'Content-Type': 'multipart/form-data'},
      });
      console.log(res.data, "ini res dataaa");
      const {
        Level,
        Id,
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
      } = res.data;

    //   console.log(Level, 'ini login level??????');
      if (Level == 'Umum') {
        alert('User Umum Berhasil Login');

        // * sesion using asynStorage
        AsyncStorage.setItem('userName', UsernameHook);
        AsyncStorage.setItem('idUser', Id);
        AsyncStorage.setItem('Level', Level);
        navigation.navigate('HomeUmum', {
          IdU: Id,
          Levels: Level,
          Username: Username,
          Password: Password,
          JenisKelamin: JenisKelamin,
          Nama: Nama,
          Email: Email,
          TglLahir: TglLahir,
          NomorTelp: NomorTelp,
          NIK: NIK,
          NomorKK: NomorKK,
          FotoProfile: FotoProfile,
          WaktuRegister: WaktuRegister,
          systemAntrian: systemAntrian
        });
      } else if (Level == 'Admin') {
        alert('User Admin Berhasil Login');
        AsyncStorage.setItem('userName', UsernameHook);
        AsyncStorage.setItem('idUser', Id);
        AsyncStorage.setItem('Level', Level);
        navigation.navigate('AdminPageNavigation', {
            IdU: Id,
            Levels: Level,
            Username: Username,
            Password: Password,
            JenisKelamin: JenisKelamin,
            Nama: Nama,
            Email: Email,
            TglLahir: TglLahir,
            NomorTelp: NomorTelp,
            NIK: NIK,
            NomorKK: NomorKK,
            FotoProfile: FotoProfile,
            WaktuRegister: WaktuRegister,
            systemAntrian: systemAntrian
          });
      } else {
        alert('login Gagal!!!');
      }

      // navigation.navigate('AdminPageNavigation')
    } catch (error) {
      alert('Gagal Login');
      console.log(error);
    }

    // console.log(res.data['message']);
  }

  return (
    <ScrollView style={{backgroundColor: putih}}>
      <HeaderCloud />
      {/* wrapSemuaContent */}
      <View style={stylesDariGaya.paddingDef}>
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
            color={hijau}
            name="arrow-back-ios"
          />

          <Text
            style={[
              stylesDariGaya.textDef,
              stylesDariGaya.TextMediumBold,
              {color: hijau},
            ]}>
            Kembali
          </Text>
        </TouchableOpacity>

        {/* Login Umum Text */}
        <View style={{alignItems: 'center', marginTop: 50}}>
          <Text style={[stylesDariGaya.TextBold, {letterSpacing: 2}]}>
            Login
          </Text>
        </View>
        {/* Form Login */}

        <View>
          <View style={[{marginTop: 20}]}>
            <TextInput
              style={[stylesDariGaya.formInput]}
              onChangeText={text => setUsernameHook(text)}
              value={UsernameHook}
              placeholder="Username"
            />
          </View>
          <View style={[{marginTop: 20}]}>
            <TextInput
              style={[stylesDariGaya.formInput]}
              onChangeText={text => setPasswordHook(text)}
              value={PasswordHook}
              secureTextEntry={true}
              placeholder="Password"
            />
          </View>
          <TouchableOpacity
            style={[
              stylesDariGaya.Tombols,
              {
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              },
            ]}
            onPress={async () => {
              try {
                await loginFunc();
              } catch (error) {}
            }}>
            <Text style={[{color: putih}]}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* tombol login admin dan Buat AKun */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: 50,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('FormBuatAkunScreen')}>
            <Text style={{color: hijau, textDecorationLine: 'underline'}}>
              Buat Akun?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Logins;
