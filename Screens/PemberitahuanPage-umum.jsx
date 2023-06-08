import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {stylesDariGaya} from './Components/ImportedStyles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import ButtonBack from './Components/ButtonBack';
import axios from 'axios';
import {ipAdress} from './Components/Url';
import {Grey, Kuning, putih, ungu} from '../Assets/StylingComponent/Coloring';
import {AntDesign, Feather} from './Components/Icons';
// import {TouchableOpacity} from 'react-native-gesture-handler';

const PemberitahuanScreen = ({navigation, route}) => {
  const {Id} = route.params;
  const [dataPemberitahuan, setdataPemberitahuan] = useState([]);
  const [dataleng, setdataleng] = useState([]);
  const [dataIdUSer, setdataIdUSer] = useState('');
  const [selectedId, setSelectedId] = useState(false);
  // const openvisible = Iduser => {
  //   setVisible(!visible);
  // };
  // getPemberitahuan
  const getPemberitahuan = async () => {
    try {
      const result = await axios({
        method: 'POST',
        url: `${ipAdress}/aplikasiLayananAkta/api/apiDataBayi.php`,
      });

      let data = result.data;
      const datafilter = data.filter(d => d.IdUser == Id);
      console.log(datafilter, 'semua data filter by user');
      data = datafilter.length;
      setdataleng(data)
      setdataPemberitahuan(datafilter);
      // setdataIdUSer(datafilter[0].IdUser);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPemberitahuan();
  }, []);
  return (
    <SafeAreaView style={[{flex: 1}]}>
      {/* header box */}
      <View style={[stylesDariGaya.headerBox, {justifyContent: 'center'}]}>
        <ButtonBack buttontext={'Pemberitahuan'} />
      </View>
      {/* pemberitahuan */}
      {dataleng == 0 ? (
        <ImageBackground
          source={require('../Assets/Images/makeQueue.png')}
          style={[{paddingHorizontal: 10, resizeMode: 'center', flex: 1, backgroundColor: ungu, justifyContent: 'center'}]}>
          <Text style={[{ fontSize: 20, padding: 20, backgroundColor: Grey, textAlign: 'center', width: 200, alignSelf: 'center'}]}>
            Sihlakan medaftar layanan terlebih dulu
          </Text>
          {/* <Image
            source={require('../Assets/Images/makeQueue.png')}
            style={[{resizeMode: 'center',width: 400, height: 400}]}
          /> */}
        </ImageBackground>
      ) : (
        <View
          style={[
            {
              flex: 1,
              marginHorizontal: 20,
              marginBottom: 20,
              marginTop: 20,
              // backgroundColor: ungu,
            },
          ]}>
          <FlatList
            data={dataPemberitahuan}
            renderItem={({item}) => (
              <View style={[{flex: 1}]}>
                <TouchableOpacity
                  style={[
                    {
                      paddingHorizontal: 20,
                      paddingVertical: 30,
                      backgroundColor: ungu,
                      marginTop: 2,
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    },
                  ]}
                  onPress={() => {
                    if (selectedId === item.IdAnak) {
                      setSelectedId(null); // Menyembunyikan item.Pemberitahuan ketika item di-press lagi
                    } else {
                      setSelectedId(item.IdAnak); // Menampilkan item.Pemberitahuan
                    }
                  }}>
                  <Text style={[{color: putih}]}>{item.Nama}</Text>
                  {item.Pemberitahuan == 0 ? (
                    <Feather name="bell-off" size={20} color={Grey} />
                  ) : (
                    <Feather name="bell" size={20} color={putih} />
                  )}
                </TouchableOpacity>
                {selectedId === item.IdAnak && (
                  <View
                    style={[
                      {
                        flex: 1,
                        padding: 10,
                        backgroundColor: Kuning,
                        justifyContent: 'center',
                        alignItems: 'center',
                      },
                    ]}>
                    {item.Pemberitahuan === '0' ? (
                      <Image
                        style={[
                          {
                            width: 200,
                            height: 200,
                            resizeMode: 'center',
                            // alignSelf: 'center',
                          },
                        ]}
                        source={require('../Assets/Images/makeQueue.png')}
                      />
                    ) : (
                      <Image
                        style={[
                          {
                            width: 200,
                            height: 200,
                            resizeMode: 'center',
                            alignSelf: 'center',
                          },
                        ]}
                        source={require('../Assets/Images/Processing.png')}
                      />
                    )}
                    <View
                      style={[
                        {
                          // paddingHorizontal: 100,
                          // paddingVertical: 50,
                          backgroundColor: putih,
                          width: '100%',
                        },
                      ]}>
                      <Text style={[{padding: 10}]}>
                        {item.Pemberitahuan == 0
                          ? 'Belum ada Pemberitahuan'
                          : item.Pemberitahuan}
                      </Text>
                    </View>
                  </View>
                )}
              </View>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default PemberitahuanScreen;
