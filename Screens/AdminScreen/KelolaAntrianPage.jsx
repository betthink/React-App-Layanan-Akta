import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {stylesDariGaya} from '../Components/Gayaaja';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  gelap,
  hijau,
  hitam,
  pinkGelap,
  putih,
  putihGelap,
  ungu,
} from '../../Assets/StylingComponent/Coloring';
// import {DataTerdaftar} from '../UmumScreen/AntrianLayananScreen';
import {styleAntian} from '../UmumScreen/BuatAntrian';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {ipAdress} from '../Components/Url';
import axios from 'axios';
// import IonIcon from 'react-native-vector-icons/Ionicons'
const Tab = createMaterialTopTabNavigator();
const IconDownload = 'download';
// * Terdaftar====================================================================
function AntrianTerdaftarAdmin({navigation}) {
  const [dataAntrian, setDataAntrian] = useState([]);
  // const idAntrian = dataAntrian.IdAntrian;
  const getApi = () => {
    const url = ` ${ipAdress}/aplikasiLayananAkta/api/apiDataAntrian.php`;
    axios({
      method: 'POST',
      url: `${url}`,
    })
      .then(res => {
        let data = res.data;

        data = data.filter(d => d.Status == 'Terdaftar');
        setDataAntrian(data)}) 
      .catch(err => console.log(err));
  };
  useEffect(() => {
    getApi();
    // console.log(dataAntrian, "ini adalah link profile");
    
    // console.log("ambil data baru");
  }, []);

  // function select antrian
  function pilihAntrian() {
    const {idAntrian, nama} = dataAntrian;
    console.log(dataAntrian.idAntrian);
    navigation.navigate('DetailAntrian', {IdAntrian: item.IdAntrian});
  }

  return (
    <View style={{flex: 1, backgroundColor: putihGelap}}>
      <View style={[]}>
        <FlatList
        style={[{marginBottom: 70}]}
          data={dataAntrian}
          renderItem={({item}) => (
      
            <TouchableOpacity
              style={[{}]}
              onPress={() =>
            {
                navigation.navigate('DetailAntrian', {
                  detailAntrian: item,
                })}
              }>
              <View style={stylesDariGaya.listStyle}>
                <Image
                  // size={50}
                  style={[{width: 50, height: 50, borderRadius: 25}]}
                  // source={{uri:item.FotoProfile}}
                  // source={require('../../Assets/Images/album.png')}
                />
                <View style={[{justifyContent: 'flex-end', alignItems: 'flex-end'}]}>
                  <Text style={[stylesDariGaya.TextMediumBold]}>Id :{item.IdAntrian}</Text>
                  <Text style={{marginLeft: 10}}>Waktu Pendafataran :{item.WaktuPendaftaran}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      {/* tombol */}
      <TouchableOpacity
      onPress={()=>navigation.navigate('AntrianDiprosesAdmin')}
        style={{
          paddingHorizontal: 50,
          paddingVertical: 10,
          backgroundColor: putih,
          borderWidth: 2,
          borderColor: hijau,
          borderRadius: 20,
          // width: '70%',
          alignSelf: 'center',
          marginTop: 30,
          position: 'absolute',
          bottom: 10,

        }}>
        <Text style={[stylesDariGaya.TextMediumBold, {alignSelf: 'center'}]}>
          Proses
        </Text>
      </TouchableOpacity>
    </View>
  );
}
// * Prosess====================================================================

function AntrianDiprosesAdmin({navigation}) {
  // icons
  // size icons
  const sizeIcon = 30;
  return (
    <View style={{flex: 1, backgroundColor: putihGelap}}>
      <View style={[stylesDariGaya.containerBoxHijau]}>
        {/* Text atas */}

        <View style={[{flexDirection: 'row'}]}>
          <View>
            <Text>Nama</Text>
            <Text style={[styleHalAntrian.spaceTiap]}>Id Antrian</Text>
          </View>
          <View style={[{marginLeft: 50}]}>
            <Text style={[stylesDariGaya.BorderLeftHijau]}>Robetson</Text>
            <Text
              style={[
                stylesDariGaya.BorderLeftHijau,
                styleHalAntrian.spaceTiap,
              ]}>
              001
            </Text>
          </View>
          <View style={[{position: 'absolute', right: 0, top: 35}]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProfileUmumScreen')}>
              <Text style={[{color: hijau}]}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Download Files */}
        <ScrollView style={[{marginVertical: 20}]}>
          {/* Formulir Permohonan data */}
          <View style={[styleAntian.formInputFile]}>
            <Text style={[styleAntian.fontContent]}>
              Formulir Permohonan akta
            </Text>
            <TouchableOpacity onPress={() => {}}>
              <MaterialIcon nama={IconDownload} size={sizeIcon} color={hijau} />
            </TouchableOpacity>
          </View>
          {/* Scan KK */}
          <View style={[styleAntian.formInputFile]}>
            <Text style={[styleAntian.fontContent]}>Scan KK</Text>
            <TouchableOpacity onPress={() => {}}>
              <MaterialIcon nama={IconDownload} size={sizeIcon} color={hijau} />
            </TouchableOpacity>
          </View>
          {/* Scan KTP Ibu */}
          <View style={[styleAntian.formInputFile]}>
            <Text style={[styleAntian.fontContent]}>Scan KTP Ibu</Text>
            <TouchableOpacity onPress={() => {}}>
              <MaterialIcon nama={IconDownload} size={sizeIcon} color={hijau} />
            </TouchableOpacity>
          </View>
          {/* Scan KTP Bapak */}
          <View style={[styleAntian.formInputFile]}>
            <Text style={[styleAntian.fontContent]}>Scan KTP Bapak</Text>
            <TouchableOpacity onPress={() => {}}>
              <MaterialIcon nama={IconDownload} size={sizeIcon} color={hijau} />
            </TouchableOpacity>
          </View>
          {/* Scan Buku Nikah */}
          <View style={[styleAntian.formInputFile]}>
            <Text style={[styleAntian.fontContent]}>Scan Buku Nikah</Text>
            <TouchableOpacity onPress={() => {}}>
              <MaterialIcon nama={IconDownload} size={sizeIcon} color={hijau} />
            </TouchableOpacity>
          </View>
          {/* Scan Surat Keterangan Lahir */}
          <View style={[styleAntian.formInputFile]}>
            <Text style={[styleAntian.fontContent]}>
              Scan Surat Keterangan Lahir
            </Text>
            <TouchableOpacity onPress={() => {}}>
              <MaterialIcon nama={IconDownload} size={sizeIcon} color={hijau} />
            </TouchableOpacity>
          </View>
          {/* button tolak */}
          <TouchableOpacity
            onPress={() => {
              
              alert('hehe');
            }}
            style={[
              {
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
                height: 40,
                width: 100,
                backgroundColor: pinkGelap,
                borderRadius: 50,
              },
            ]}>
            <Text style={[{color: putih}]}>Tolak</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {/* end container box hijau */}
      {/* pesan kepada user */}
      <View
        style={[
          {flexDirection: 'row', margin: 30, justifyContent: 'space-between'},
        ]}>
        <TextInput
          placeholder="Pesan ke user"
          style={[{width: '50%', borderBottomWidth: 2, borderColor: hijau}]}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AntrianTerdaftarAdmin')
            alert('nanti woy');
          }}
          style={[
            styleHalAntrian.buttonThisPage,
            {
              backgroundColor: hijau,
            },
          ]}>
          <Text style={[stylesDariGaya.textColorWhite]}>Selesai</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const AntrianDitolakAdmin = ({navigation}) => {
  let [dataAntrian, setDataAntrian] = useState([]);

  const TampilkanAntrianDitolak = () => {
    const url = ` ${ipAdress}/aplikasiLayananAkta/api/apiDataAntrian.php`;
    axios({
      method: 'POST',
      url: `${url}`,
    })
      .then(res => {
        let data = res.data;

        data = data.filter(d => d.Status == 'Ditolak');
        // console.log(data, "ini data antrian terdaftar");
        // setLeng(data.length);
        setDataAntrian(data);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    TampilkanAntrianDitolak();
  }, []);
  return (
    <View style={[stylesDariGaya.containerBoxHijau]}>
      <FlatList
        data={dataAntrian}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DetailAntrian', {detailAntrian: item})
            }
            style={[
              {
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderLeftWidth: 3,
                borderColor: hijau,
                marginVertical: 5,
                paddingVertical: 20,
                borderBottomWidth: 4,
                borderBottomColor: putihGelap,
              },
            ]}>
            <MaterialIcon size={25} name="clear" color={hijau} />
            <Text>
              Antrian nomor
              <Text style={[{color: hijau}]}>{item.IdAntrian}</Text>
            </Text>
            <Text>{item.WaktuPendaftaran}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
function TabKelolaAntrian() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="AntrianTerdaftarAdmin"
      screenOptions={({route}) => ({
        tabBarLabelStyle: {fontSize: 14},
        tabBarStyle: {
          backgroundColor: hijau,
          height: 100,
          justifyContent: 'flex-end',
        },
        style: {backgroundColor: 'red', marginTop: insets.top},
      })}>
      <Tab.Screen
        name="AntrianTerdaftarAdmin"
        component={AntrianTerdaftarAdmin}
        options={{
          title: ({color, focused}) => (
            <View style={[{justifyContent: 'center', alignItems: 'center'}]}>
              <MaterialIcon
                color={focused ? putih : gelap}
                name="schedule"
                size={25}
              />
              {focused ? (
                <Text style={[{color: putih}]}>Terdaftar</Text>
              ) : (
                <Text style={[{color: gelap}]}>Terdaftar</Text>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AntrianDiprosesAdmin"
        component={AntrianDiprosesAdmin}
        options={{
          title: ({color, focused}) => (
            <View style={[{justifyContent: 'center', alignItems: 'center'}]}>
              <MaterialIcon
                color={focused ? putih : gelap}
                name="queue"
                size={25}
              />
              {focused ? (
                <Text style={[{color: putih}]}>Diproses</Text>
              ) : (
                <Text style={[{color: gelap}]}>Diproses</Text>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AntrianDitolakAdmin"
        component={AntrianDitolakAdmin}
        options={{
          title: ({color, focused}) => (
            <View style={[{justifyContent: 'center', alignItems: 'center'}]}>
              <MaterialIcon
                color={focused ? putih : gelap}
                name="clear"
                size={25}
              />
              {focused ? (
                <Text style={[{color: putih}]}>Ditolak</Text>
              ) : (
                <Text style={[{color: gelap}]}>Ditolak</Text>
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const KelolaAntrianPage = () => {
  return <TabKelolaAntrian />;
};

export default KelolaAntrianPage;

const styleHalAntrian = StyleSheet.create({
  styleTextAtas: {
    borderLeftWidth: 3,
    borderLeftColor: hijau,
    // justifyContent: '',
    paddingLeft: 10,
  },
  buttonThisPage: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVerticall: 5,

    borderRadius: 20,
  },

  styleContainerText: {flexDirection: 'row', justifyContent: 'space-around'},
  spaceTiap: {marginTop: 10},
});
