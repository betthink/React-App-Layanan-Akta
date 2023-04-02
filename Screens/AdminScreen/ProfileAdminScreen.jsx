import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {stylesDariGaya} from '../Components/Gayaaja';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {pickSingle, isCancel} from 'react-native-document-picker';
import {fotoUrl} from '../../Assets/Url';
import axios from 'axios';
import {
  hijau,
  hitam,
  putih,
  putihGelap,
  toska,
  ungu,
} from '../../Assets/StylingComponent/Coloring';
import {ipAdress} from '../Components/Url';

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

const ProfileAdminScreen = ({navigation, route}) => {
  // document picker function
// * ini adalah Id
const [idUmum, setIdUmum] = useState('');
const [username, setusername] = useState('');
const [password, setpassword] = useState('');
const [tanggallahir, settanggallahir] = useState('');

const [nik, setnik] = useState('');
const [nokk, setnokk] = useState('');
const [nomortelepon, setnomortelepon] = useState('');
const [jeniskelamin, setjeniskelamin] = useState('');
const [nama, setnama] = useState('');
const [email, setemail] = useState('');
const [fotoProfile, setfotoProfile] = useState('');
console.log(fotoProfile, "ini url foto profile");
const {Id} = route.params; 
// console.log("ini adalah id Umum",Id)
// * Fungsi tampilkan data user by id
async function tampilkanDataById() {
    
  try {
    // setIdUmum({Id});

    const res = await axios(
      {
        
        method: "POST",
        data : {
          IdAdmin : Id,
       
        
        },
        url: `${ipAdress}/aplikasiLayananAkta/api/apiUserAdminById.php`,
        headers: { "Content-Type": "multipart/form-data" },
      }
    );  
    setIdUmum(idUmum)
    console.log(res.data);
    const {value, IdUmum} = res.data;
    if(value == 1 ){
      // alert("Berhasil ambil")
      setnama(res.data.Nama)
      setusername(res.data.Username) 
      setpassword(res.data.Password)    
      setnik(res.data.NIK)
      setnokk(res.data.NomorKK)
      setjeniskelamin(res.data.JenisKelamin)
      setemail(res.data.Email)
      settanggallahir(res.data.TglLahir)
      setnomortelepon(res.data.NomorTelp)
      setfotoProfile(res.data.FotoProfile)
    }else{
      alert(" Gagal ambil data")
    }
  } catch (error) {
    alert("Gagal tampil data")
    console.log(error);
  }
}
 useEffect(() => {
  tampilkanDataById()
  }, []);
// }
  return (
    <View style={{flex: 1, backgroundColor: putihGelap}}>
      {/* foto profile container */}
      <View style={{marginHorizontal: 22, flex: 1}}>
        <View style={{marginVertical: 20}}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.goBack()}>
            <MaterialIcon color={hitam} size={16} name="arrow-back-ios" />
            <Text style={[stylesDariGaya.textDef, {color: hitam}]}>
              Kembali
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <View
            style={{
              backgroundColor: putih,
              opacity: 5,
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
                // backgroundColor: putihGelap,
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
                style={[{width: 80, height: 80, borderRadius: 40}]}
                // source={require('../../Assets/Images/album.png')}
                source={{uri: fotoProfile}}
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
              <Text style={[stylesDariGaya.TextBold]}>{username}</Text>
              <Text style={[stylesDariGaya.textDataStyle]}>Id: {Id}</Text>
            </View>
          </View>
        </View>
        {/* Data pribadi  */}
        <ScrollView style={{marginTop: 20}}>
          <View style={[stylesDariGaya.listData]}>
            <Text>Password</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{password}</Text>
          </View>
          <View style={[stylesDariGaya.listData]}>
            <Text>Nama</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{nama}</Text>
          </View>
          <View style={[stylesDariGaya.listData]}>
            <Text>NIK</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{nik}</Text>
          </View>
          <View style={[stylesDariGaya.listData]}>
            <Text>No. KK</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{nokk}</Text>
          </View>
          <View style={[stylesDariGaya.listData]}>
            <Text>No. Telp</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{nomortelepon}</Text>
          </View>
          <View style={[stylesDariGaya.listData]}>
            <Text>Jenis Kelamin</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{jeniskelamin}</Text>
          </View>
          <View style={[stylesDariGaya.listData]}>
            <Text>Email</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{email}</Text>
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
            onPress={async()=>{
              try {
              
                await tampilkanDataById();
              } catch (error) {
                
              }
            } }
            style={[styleButtons.buttons, {backgroundColor: hijau}]}>
            <MaterialIcon name="edit" color={putih} />
            <Text style={[{color: putih}]}>Edit Akun</Text>
          </TouchableOpacity>
          {/* buttons Hapus */}
          <TouchableOpacity
            style={[styleButtons.buttons, {backgroundColor: ungu}]}>
            <MaterialIcon name="delete" color={putih} />
            <Text style={[{color: putih}]}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileAdminScreen;

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
