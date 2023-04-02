import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {stylesDariGaya} from './Components/Gayaaja';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons'
import {pickSingle, isCancel} from 'react-native-document-picker';
import {fotoUrl} from 'Assets/Url';
import axios from 'axios';
import {
  hijau,
  hitam,
  putih,
  putihGelap,
  toska,
  ungu,
} from '../Assets/StylingComponent/Coloring';
import {ipAdress} from '../Components/Url';
import AsyncStorage from '@react-native-async-storage/async-storage';

// add file
async function openDocument() {
  try {
    // console.log(test.pickSingle());
    const doc = await pickSingle();
    // console.log(doc);
  } catch (err) {
    console.log(err);
    if (isCancel(err)) {
      console.log('canceled', err);
    } else {
      console.log(err);
    }
  }
}

const ProfileScreen = ({navigation, route}) => {

  // * Fungsi tampilkan data user by id
  const {
    IdU,
    Levels,
    Username,
    Password,
    JenisKelamin,
    Nama,
    TglLahir,
    Email,
    NomorTelp,
    NIK,
    NomorKK,
    FotoProfile,
    WaktuRegister,
    systemAntrian,
  } = route.params;
  
  async function tampilkanDataById() {
    try {
      // setIdUmum({Id});

      const res = await axios({
        method: 'POST',
        data: {
          IdUmum: Id,
        },
        url: `${ipAdress}/aplikasiLayananAkta/api/apiUserById.php`,
        headers: {'Content-Type': 'multipart/form-data'},
      });

      console.log(res.data);
      const {value, IdUmum} = res.data;
      // console.log(value,"ini value")
      if (value == 1) {
        // alert("Berhasil ambil")
        setIdUmum(Id);
        setnama(res.data.Nama);
        setnama(res.data.Nama);
        setusername(res.data.Username);
        setpassword(res.data.Password);
        setnik(res.data.NIK);
        setnokk(res.data.NomorKK);
        setjeniskelamin(res.data.JenisKelamin);
        setemail(res.data.Email);
        settanggallahir(res.data.TglLahir);
        setnomortelepon(res.data.NomorTelp);
        setfotoProfile(res.data.FotoProfile);

        // console.log("ini adalah Id:",res.data.IdUmum);
      } else {
        alert(' Gagal ambil data');
      }

      // navigation.navigate('AdminPageNavigation')
    } catch (error) {
      alert('Gagal tampil data');
      console.log(error);
    }

    // console.log(res.data['message']);
  }

  useEffect(() => {
    // tampilkanDataById();
 
  }, []);
  //   // console.log(res.data['message']);

  // }
  // * Fungsi hapus akun user umum by id
  async function deleteDataById() {
    try {
      // setIdUmum({Id});

      const res = await axios({
        method: 'POST',
        data: {
          Id: IdU,
        },
        url: `${ipAdress}/aplikasiLayananAkta/deleteAkun.php`,
        headers: {'Content-Type': 'multipart/form-data'},
      });

      const {value} = res.data;
      // console.log(value,"ini value")
      if (value == 1) {
        alert('Berhasil dihapus');
        navigation.goBack();

        // console.log("ini adalah Id:",res.data.IdUmum);
      } else {
        alert(' Gagal hapus akun');
      }

      // navigation.navigate('AdminPageNavigation')
    } catch (error) {
      alert('Gagal h data');
      console.log(error);
    }

    // console.log(res.data['message']);
  }
  return (
    <View style={{flex: 1, backgroundColor: putihGelap}}>
      {/* foto profile container */}
      <View style={{marginHorizontal: 22, flex: 1}}>
        <View style={{marginVertical: 20}}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.goBack()}>
            <IonIcon color={hitam} size={16} name="chevron-back"/>
            <Text style={[stylesDariGaya.textDef, {color: hitam}]}>
              Kembali
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <View
            style={{
              backgroundColor: putih,
              marginTop: 30,
              paddingVertical: 10,
              borderBottomWidth: 3,
              borderBottomColor: ungu,
              borderTopStartRadius: 20,
              borderTopEndRadius: 20,
              height: 130,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* image profile */}
            <TouchableOpacity
              style={{
                backgroundColor: putihGelap,
                width: 100,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                borderWidth: 4,
                borderColor: '#fff',
                borderRadius: 50,
                position: 'absolute',
                top: -30,
              }}
              onPress={() => {
                openDocument();
                // console.log("hgh");
              }}>
              <Image
                size={50}
                style={[{width: 80, height: 80, borderRadius: 40}]}
                source={{
                  uri: FotoProfile,
                }}
              />
              <MaterialIcon
                style={{position: 'absolute', top: 5, right: 0}}
                name="add-circle"
                size={20}
                color={'#24CE9E'}
              />
            </TouchableOpacity>
            <View
              style={{position: 'absolute', bottom: 5, alignItems: 'center'}}>
              <Text style={[stylesDariGaya.TextBold]}>{Username}</Text>
              <Text style={[stylesDariGaya.textDataStyle]}>Id: {IdU}</Text>
            </View>
          </View>
        </View>
        {/* Data pribadi  */}
        <ScrollView style={{marginTop: 20}}>
          <View style={[stylesDariGaya.listData]}>
            <Text>Level</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{Levels}</Text>
          </View>
          <View style={[stylesDariGaya.listData]}>
            <Text>Nama</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{Nama}</Text>
          </View>
          <View style={[stylesDariGaya.listData]}>
            <Text>NIK</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{NIK}</Text>
          </View>
          <View style={[stylesDariGaya.listData]}>
            <Text>No. KK</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{NomorKK}</Text>
          </View>
          <View style={[stylesDariGaya.listData]}>
            <Text>No. Telp</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{NomorTelp}</Text>
          </View>
          <View style={[stylesDariGaya.listData]}>
            <Text>Jenis Kelamin</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{JenisKelamin}</Text>
          </View>
          <View style={[stylesDariGaya.listData]}>
            <Text>Tanggal Lahir</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{TglLahir}</Text>
          </View>
        </ScrollView>
        {/* *buttons */}
        <View
          style={[
            {
              marginVertical: 20,
              justifyContent: 'space-between',
              flexDirection: 'row',
            },
          ]}>
          {/* buttons Edit */}
          <TouchableOpacity
            // onPress={getApi}
            onPress={() =>
              navigation.navigate('EditDataUserUmum', {
                userName: Username,
                idUmum: IdU,
                password: Password,
                tanggallahir: TglLahir,
                
                nik: NIK,
                nokk: NomorKK,
                nomortelepon: NomorTelp,
                jeniskelamin: JenisKelamin,
                nama: Nama,
                email: Email,
                fotoProfile: FotoProfile,
              })
            }
            style={[styleButtons.buttons, {backgroundColor: hijau}]}>
            <MaterialIcon name="edit" color={putih} />
            <Text style={[{color: putih}]}>Edit Akun</Text>
          </TouchableOpacity>
          {/* buttons Hapus */}
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.clear();
              navigation.replace('LoginU');
            }}
            style={[styleButtons.buttons, {backgroundColor: '#454545'}]}>
            <MaterialIcon name="logout" color={putih} />
            <Text style={[{color: putih}]}>Log Out</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styleButtons.buttons, {backgroundColor: ungu}]}
            onPress={async () => {
              try {
                await deleteDataById();
              } catch (error) {}
            }}>
            <MaterialIcon name="delete" color={putih} />
            <Text style={[{color: putih}]}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styleButtons = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    padding: 10,

    width: 115,
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
