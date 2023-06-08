import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Switch,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {stylesDariGaya} from '../Components/ImportedStyles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {pickSingle, isCancel} from 'react-native-document-picker';
import {fotoUrl} from '../../Assets/Url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  Purple,
  hijau,
  hitam,
  pinkGelap,
  putih,
  putihGelap,
  toska,
  ungu,
} from '../../Assets/StylingComponent/Coloring';
import {ipAdress} from '../Components/Url';
import {ConfirmationModal, styleModal} from '../Components/ModalKonfirmasi';
// import {ipAdress} from '../Components/Url';

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
  const {Id} = route.params;
  // console.log(Id, "Id dari params");
  const [password, setpassword] = useState('');
  const [nik, setnik] = useState('');
  // const [Id, setId] = useState('');

  const [nomortelepon, setnomortelepon] = useState('');
  const [nama, setnama] = useState('');
  const [email, setemail] = useState('');
  const [fotoProfile, setfotoProfile] = useState('');
  const [valDefaultLayanan, setvalDefaultLayanan] = useState(null);

  const ambilCookie = () => {
    AsyncStorage.getItem('userData').then(value => {
      AsyncStorage.getItem('userData');
      const {
        Id,
        Nama,
        Password,
        Email,
        NomorTelp,
        FotoProfile,
        StatusLayanan,
        NIK,
      } = JSON.parse(value);
      // setId(Id);
      setnama(Nama);
      setpassword(Password);

      setnik(NIK);
      setemail(Email);
      setnomortelepon(NomorTelp);
      setfotoProfile(FotoProfile);
      // console.log(Id, "ini Id async");
    });
  };
  const getDataUSer = async () => {
    const res = await axios({
      method: 'POST',
      // data: {Id: Id},
      url: `${ipAdress}/aplikasiLayananAkta/api/apiDataUserAdmin.php`,
    });
    let data;
    data = res.data;
    // console.log(Id, 'Ini Id dari params');
    // console.log(data, "Ini data");
    const filteredData = data.filter(item => item.Id === Id);
    // const datafilter = data[0].filter(d => d.Id == Id);
    const statusFiltered = filteredData[0].StatusLayanan;
    console.log(filteredData[0].StatusLayanan, 'Filtered');
    setvalDefaultLayanan(statusFiltered);
  };

  const [updatedLayanan, setUpdatedLayanan] = useState(null);

  const switchStatusAntrian = async () => {
    setvalDefaultLayanan(prevValue => (prevValue == 1 ? 0 : 1));
    setUpdatedLayanan(prevValue => (prevValue == 1 ? 0 : 1));
// console.log(updatedLayanan);
    const formData = new FormData();
    formData.append('Id', Id);
    formData.append('StatusLayanan', updatedLayanan);

    try {
      const res = await axios.post(
        `${ipAdress}/aplikasiLayananAkta/update/BukaTutupAntrian.php`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      const output = res.data;
      console.log(output, 'Ini output data');
      getDataUSer();
    } catch (error) {
      console.error(error);
    }
  };
  // const ubahBolean = async () => {
  //   // const newBool = valueStatus === 1 ? 0 : 1;
  //   setubahBoolean(!ubahBoolean);
  // };

  // function on off antrian
  // async function kelolaBukaTutupAntrian() {
  //   console.log(ubahBoolean);
  //   try {
  //     console.log('ini harusnya kedua');
  //     const res = await axios({
  //       method: 'POST',
  //       data: {
  //         Id: Id,
  //         StatusLayanan: ubahBoolean ? 1 : 0,
  //       },
  //       url: `${ipAdress}/aplikasiLayananAkta/update/BukaTutupAntrian.php`,
  //       headers: {'Content-Type': 'multipart/form-data'},
  //     });
  //     const {value, message, StatusLayanan} = res.data;
  //     console.log(res.data);

  //     if (StatusLayanan == 1) {
  //       alert('antrian Terbuka');
  //       navigation.replace('ProfileAdminScreen', {Id})
  //       // setvalueStatus(1);
  //     } else {
  //       alert('antrian Terbuka');
  //       navigation.replace('ProfileAdminScreen', {Id})
  //       // setvalueStatus(0);
  //     }
  //   } catch (error) {
  //     alert('koneksi sedang tidak bagus, sihlakan coba lagi?');
  //     console.log(error);
  //   }
  // }

  // modal atribute
  const [modalVisible, setModalVisible] = useState(false);

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleConfirm = async () => {
    // Lakukan aksi konfirmasi di sini
    await ubahBolean();
    await kelolaBukaTutupAntrian();
    setModalVisible(false);
  };

  // ?UseeEffect=
  useEffect(() => {
    if (valDefaultLayanan == null) {
    }
    console.log(valDefaultLayanan, 'ini di valDefaultLayanan');
    const reloadPage = navigation.addListener('focus', async () => {
      // Fungsi yang ingin Anda jalankan ketika masuk ke halaman ini
      await ambilCookie();
      await getDataUSer();

      // await fetchData();
    });

    return reloadPage;
  }, [valDefaultLayanan]);

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
        {/* foto profile */}
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
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* image profile */}
            <TouchableOpacity
              style={{
                // backgroundColor: ungu,

                width: 100,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                borderWidth: 4,
                borderColor: ungu,
                borderRadius: 50,
                position: 'absolute',
                top: -30,
              }}
              onPress={() => {
                openDocument();
              }}>
              <Image
                style={[{width: 80, height: 80, borderRadius: 45}]}
                source={{
                  uri: `${ipAdress}/aplikasiLayananAkta/uploads/FotoProfile/${nik}/${fotoProfile}`,
                }}
                // source={{
                //   uri: fotoUrl,
                // }}
              />
              {/* <MaterialIcon
                style={{position: 'absolute', top: 5, right: 0}}
                name="add-circle"
                size={20}
                color={hitam}
              /> */}
            </TouchableOpacity>
            <View
              style={{position: 'absolute', bottom: 5, alignItems: 'center'}}>
              <Text style={[stylesDariGaya.TextBold]}>{nama}</Text>
              <Text style={[stylesDariGaya.textDataStyle]}>Id: {Id}</Text>
            </View>
          </View>
        </View>
        {/* Data pribadi  */}
        <ScrollView style={{marginTop: 20}}>
          {/* modal */}
          <View style={styleModal.container}>
            <ConfirmationModal
              visible={modalVisible}
              onCancel={handleCancel}
              onConfirm={handleConfirm}
            />
          </View>
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
            <Text>No. Telp</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{nomortelepon}</Text>
          </View>
          <View style={[stylesDariGaya.listData]}>
            <Text>Email</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{email}</Text>
          </View>
          <View style={[stylesDariGaya.listData]}>
            <Text>Status Antrian</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>
              {valDefaultLayanan == 1 ? 'Buka' : 'Tutup'}
            </Text>
          </View>
        </ScrollView>
        {/* *buttons */}
        <View
          style={[
            {
              marginVertical: 20,
              justifyContent: 'space-evenly',
              flexDirection: 'row',
            },
          ]}>
          {/* buttons Edit */}
          {/* <TouchableOpacity
            // onPress={getApi}
            onPress={async () => {
              try {
                await tampilkanDataById();
              } catch (error) {}
            }}
            style={[styleButtons.buttons, {backgroundColor: ungu}]}>
            <MaterialIcon name="edit" color={putih} />
            <Text style={[{color: putih}]}>Edit Akun</Text>
          </TouchableOpacity> */}
          {/* Turn on / off antrian */}
          <TouchableOpacity
            onPress={async () => {
              try {
                setModalVisible(true);

                // await kelolaBukaTutupAntrian();
                // console.log('presed');
              } catch (error) {
                console.log(error);
              }
            }}>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={valDefaultLayanan == 1 ? hijau : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={switchStatusAntrian}
              value={valDefaultLayanan == 1}
            />
          </TouchableOpacity>
          {/* buttons Log out */}
          <TouchableOpacity
            onPress={async () => {
              await AsyncStorage.clear();
              await navigation.replace('Login');
            }}
            style={[styleButtons.buttons, {backgroundColor: '#454545', marginLeft: 20}]}>
            <MaterialIcon name="logout" color={putih} />
            <Text style={[{color: putih}]}>Log Out</Text>
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
