import {View, Text, TouchableOpacity, Image, LogBox} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderCloud from '../Components/HeaderCloud';
import HeaderBox from '../Components/HeaderBox';
import {stylesDariGaya} from '../Components/Gayaaja';
import Album from '../../Assets/Images/album.png';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import bgCloud from '../../Assets/Images/bg.png';
import MenuUmum from '../Components/MenuUmum';
import PersonPng from '../Components/PersonPng';
import {fotoUrl} from '../../Assets/Url';
import AsyncStorage from '@react-native-async-storage/async-storage';
const HomeUmum = ({navigation, route}) => {
  // * ambil Id user
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
  // const [Id, SetId] = useState('');
  // const Level = AsyncStorage.getItem('Level');

 
  // ? ignore warning
  LogBox.ignoreAllLogs();
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {/* <ImageBackground
      resizeMode="stretch"
      style={{width: '100%', height: '100%'}}> */}
      <View style={stylesDariGaya.headerBox}>
        {/* wrapp all content di box */}
        <View style={{paddingHorizontal: 22, paddingTop: 30, flex: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {/* wrap Text Header */}
            <View style={[{flex: 1}]}>
              <View>
                <Text
                  style={[
                    stylesDariGaya.TextBold,
                    {color: '#fff', fontSize: 20, letterSpacing: 3},
                  ]}>
                  Selamat Datang
                </Text>
              </View>
              <View style={{width: 300}}>
                <Text style={{color: '#fff'}}>
                  Gunakan Layanan Kami dengan Bijak dan beratnggung jawab yah!
                </Text>
              </View>
            </View>
            {/* wrap Foto Profile */}
            <View
              style={{padding: 2, backgroundColor: '#fff', borderRadius: 30}}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Profile', {
                    IdU: IdU,
                    Levels: Levels,
                    Username: Username,
                    Password: Password,
                    JenisKelamin: JenisKelamin,
                    Nama: Nama,
                    TglLahir: TglLahir,
                    Email: Email,
                    NomorTelp: NomorTelp,
                    NIK: NIK,
                    NomorKK: NomorKK,
                    FotoProfile: FotoProfile,
                    WaktuRegister: WaktuRegister,
                    systemAntrian: systemAntrian,
                  })
                }>
                <Image
                  style={[stylesDariGaya.fotoProfile]}
                  // source={require('../../Assets/Images/album.png')}
                  source={{
                    uri: fotoUrl,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* wrap content in below box */}
      <View style={{paddingHorizontal: 22, flex: 1}}>
        {/* pemberitahuan */}
        <View
          style={{
            marginTop: 10,
            height: 30,
            backgroundColor: 'grey',
            alignSelf: 'flex-end',
            borderRadius: 10,
            paddingHorizontal: 10,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => navigation.navigate('PemberitahuanScreen')}>
            <MaterialIcon name="notifications" color={'#fff'} size={20} />
            <Text style={{color: '#fff'}}>Pemberiathuan</Text>
          </TouchableOpacity>
        </View>
        <View style={[{flex: 2}]}>
          {/* Person png */}
          <PersonPng />

          <MenuUmum />
          {/* button Buat antrian */}
          <View
            style={[
              stylesDariGaya.Tombols,
              {alignSelf: 'center', marginTop: 30},
            ]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('BuatAntrian')}
              style={[stylesDariGaya.contentCenter]}>
              <Text style={[stylesDariGaya.textColorWhite]}>Buat Antrian</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

export default HomeUmum;
