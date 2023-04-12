import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {stylesDariGaya} from '../Components/Gayaaja';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import { FlatList } from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import HeaderBox from '../Components/HeaderBox';
import {ipAdress} from '../Components/Url';
import axios from 'axios';
import {hijau, putih, ungu} from '../../Assets/StylingComponent/Coloring';
// import AntrianDitolak from './StatusScreen/AntrianDitolak';
const Tab = createMaterialTopTabNavigator();
// color=====================
const colorPink = '#B930B4';
const colorHijau = '#28AFB0';
const colorKuning = '#F7CD1C';
const colorUngu = '#2E0FEF';
function MyTabs() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},

        // tabBarItemStyle: {width: "100%"},
        tabBarStyle: {backgroundColor: '#24CE9E'},
        style: {backgroundColor: 'red', marginTop: insets.top},
      }}>
      <Tab.Screen
        name="AntrianTerdaftar"
        component={AntrianTerdaftar}
        options={{
          title: ({color, focused}) => (
            <View style={[{justifyContent: 'center', alignItems: 'center'}]}>
              <MaterialIcon
                color={focused ? putih : ungu}
                name="schedule"
                size={25}
              />
              {focused ? (
                <Text style={[{color: putih}]}>Terdaftar</Text>
              ) : (
                <Text style={[{color: ungu}]}>Terdaftar</Text>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AntrianDiproses"
        component={AntrianDiproses}
        options={{
          title: ({color, focused}) => (
            <View style={[{justifyContent: 'center', alignItems: 'center'}]}>
              <MaterialIcon
                color={focused ? putih : ungu}
                name="queue"
                size={25}
              />
              {focused ? (
                <Text style={[{color: putih}]}>Diproses</Text>
              ) : (
                <Text style={[{color: ungu}]}>Diproses</Text>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AntrianDitolak"
        component={AntrianDitolak}
        options={{
          title: ({color, focused}) => (
            <View style={[{justifyContent: 'center', alignItems: 'center'}]}>
              <MaterialIcon
                color={focused ? putih : ungu}
                name="clear"
                size={25}
              />
              {focused ? (
                <Text style={[{color: putih}]}>Ditolak</Text>
              ) : (
                <Text style={[{color: ungu}]}>Ditolak</Text>
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
// ? funtion tampilkan antrian terdaftar
function AntrianTerdaftar() {
  const url = ` ${ipAdress}/aplikasiLayananAkta/api/apiDataAntrian.php`;
  let [dataAntrian, setDataAntrian] = useState();
  let [leng, setLeng] = useState(0);
  const getApi = () => {
    axios({
      method: 'POST',
      url: `${url}`,
    })
      .then(res => {
        let data = res.data;

        data = data.filter(d => d.Status == 'Terdaftar');
        // console.log(data, "ini data antrian terdaftar");
        setLeng(data.length);
        setDataAntrian(data);
        console.log(data, 'ini struktur data');
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    getApi();
    // console.log(dataAntrian.length, 'ambil data Antrian terdaftar');
  }, []);

  return (
    <View
      style={[{flex: 1, backgroundColor: '#fff', justifyContent: 'center'}]}>
      <View
        style={[
          {paddingHorizontal: 40, paddingVertical: 20},
        ]}>
        <View style={[StyleFlatlist.containerInfoWithColor]}>
          <View style={[StyleFlatlist.boxColors, {backgroundColor: hijau}]} />
          <Text style={[{paddingLeft: 10}]}>Waktu Pendaftaran</Text>
        </View>
        <View style={[StyleFlatlist.containerInfoWithColor]}>
          <View
            style={[StyleFlatlist.boxColors, {backgroundColor: '#2E0FEF'}]}
          />
          <Text style={[{paddingLeft: 10}]}>Nama pembuat antrian</Text>
        </View>
      </View>
      {leng < 1 ? (
        <View
          style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
          <Text>Belum ada pendaftar</Text>
        </View>
      ) : (
        <FlatList
          data={dataAntrian}
          renderItem={({item}) => (
            <View
              style={[
                {
                  flex: 1,
                  backgroundColor: '#F7F7F7',
                  marginVertical: 5,
                  // marginTop: 50,
                  alignSelf: 'center',
                  width: '90%',
                  borderLeftWidth: 3,
                  borderColor: '#24CE9E',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                  height: 100,
                },
              ]}>
              {/*  colom 1 */}
              <View
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  backgroundColor: '#D9D9D9',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialIcon
                  size={30}
                  style={{color: '#24CE9E'}}
                  name="schedule"
                />
              </View>
              {/* colom 2 */}
              <View style={{justifyContent: 'space-between'}}>
                {/* ============ */}
                <View>
                  <View style={[StyleFlatlist.boxStyle]}>
                    <View
                      style={
                        [StyleFlatlist.boxColors, {backgroundColor: colorPink}]
                        // borderRadius: 7,
                      }
                    />
                    <Text>{item.IdPendaftaran}</Text>
                  </View>
                  <View style={[StyleFlatlist.boxStyle]}>
                    <View
                      style={
                        [StyleFlatlist.boxColors, {backgroundColor: colorUngu}]
                        // borderRadius: 7,
                      }
                    />
                    <Text>{item.WaktuPendaftaran}</Text>
                  </View>
                </View>
              </View>

              {/* ============================== */}
            </View>
          )}
        />
      )}
    </View>
  );
}
// ? funtion tampilkan antrian diproses
function AntrianDiproses() {
  const url = ` ${ipAdress}/aplikasiLayananAkta/api/apiDataAntrian.php`;
  const [dataAntrian, setDataAntrian] = useState();
  let [value, setValue] = useState(0);
  const getApi = () => {
    axios({
      method: 'POST',
      url: `${url}`,
    })
      .then(res => {
        let data = res.data;
        data = data.filter(d => d.Status == 'Diproses');
        // console.log(data, "ini data antrian Diproses");
        setDataAntrian(data);
        setValue(data.length);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    getApi();
    console.log('ambil data Antrian Doproses');
  }, [getApi()]);
  return (
    // {dataAntrian.length < 1 ()}
    <View style={[{flex: 1, backgroundColor: '#fff'}]}>
       <View
        style={[
          {paddingHorizontal: 40, paddingVertical: 20},
        ]}>
        <View style={[StyleFlatlist.containerInfoWithColor]}>
          <View style={[StyleFlatlist.boxColors, {backgroundColor: hijau}]} />
          <Text style={[{paddingLeft: 10}]}>Waktu Pendaftaran</Text>
        </View>
        <View style={[StyleFlatlist.containerInfoWithColor]}>
          <View
            style={[StyleFlatlist.boxColors, {backgroundColor: '#2E0FEF'}]}
          />
          <Text style={[{paddingLeft: 10}]}>Nama pembuat antrian</Text>
        </View>
      </View>

      {value < 1 ? (
        <View
          style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
          <Text>Belum ada antrian diproses </Text>
        </View>
      ) : (
        <FlatList
          data={dataAntrian}
          renderItem={({item}) => (
            <View
              style={[
                {
                  flex: 1,
                  backgroundColor: '#F7F7F7',
                  marginVertical: 5,
                  alignSelf: 'center',
                  width: '90%',
                  justifyContent: 'center',
                  borderLeftWidth: 3,
                  borderColor: '#24CE9E',
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  alignItems: 'center',
                  height: 100,
                },
              ]}>
              {/*  colom 1 */}
              <View
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  backgroundColor: '#D9D9D9',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialIcon
                  size={30}
                  style={{color: '#24CE9E'}}
                  name="queue"
                />
              </View>
              {/* colom 2 */}
              <View style={{justifyContent: 'space-between'}}>
                {/* ============ */}
                <View>
                  <View style={[StyleFlatlist.boxStyle]}>
                    <View
                      style={
                        [StyleFlatlist.boxColors, {backgroundColor: colorPink}]
                        // borderRadius: 7,
                      }
                    />
                    <Text>{item.IdAntrian}</Text>
                  </View>
                  <View style={[StyleFlatlist.boxStyle]}>
                    <View
                      style={
                        [StyleFlatlist.boxColors, {backgroundColor: colorUngu}]
                        // borderRadius: 7,
                      }
                    />
                    <Text>{item.IdAntrian}</Text>
                  </View>
                </View>
              </View>
              {/* colom 3 */}
              <View style={{justifyContent: 'space-between'}}>
                {/* ============ */}
                <View>
                  <View style={[StyleFlatlist.boxStyle]}>
                    <View
                      style={{
                        height: 14,
                        width: 14,
                        // borderRadius: 7,
                        backgroundColor: colorHijau,
                      }}
                    />
                    <Text>{item.WaktuPendaftaran}</Text>
                  </View>
                  <View style={[StyleFlatlist.boxStyle]}>
                    <View
                      style={
                        [
                          StyleFlatlist.boxColors,
                          {backgroundColor: colorKuning},
                        ]
                        // borderRadius: 7,
                      }
                    />
                    <Text>{item.WaktuSelesai}</Text>
                  </View>
                </View>
              </View>
              {/* ============================== */}
            </View>
          )}
        />
      )}
    </View>
  );
}
// ? funtion tampilkan antrian ditolak
const AntrianDitolak = () => {
  // let [data, setData] = useState([]);
  const url = ` ${ipAdress}/aplikasiLayananAkta/api/apiDataAntrian.php`;
  const [dataAntrian, setDataAntrian] = useState();
  let [lengt, setLengt] = useState(0);
  const getApi = () => {
    axios({
      method: 'POST',
      url: `${url}`,
    })
      .then(res => {
        let data = res.data;
        data = data.filter(d => d.Status == 'Ditolak');
        // console.log(data, "ini data antrian Diproses");
        setDataAntrian(data);
        setLengt(data.length);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    getApi();
    console.log('ambil data Antrian Ditolak');
  }, [getApi()]);

  return (
    <View style={[{flex: 1, backgroundColor: putih}]}>
      {lengt < 1 ? (
        <View
          style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
          <Text>Belum ada antrian ditolak</Text>
        </View>
      ) : (
        <FlatList
          data={dataAntrian}
          renderItem={({item}) => (
            <View
              style={[
                {
                  flex: 1,
                  backgroundColor: '#F7F7F7',
                  marginVertical: 5,
                  alignSelf: 'center',
                  width: '90%',
                  justifyContent: 'center',
                  borderLeftWidth: 3,
                  borderColor: '#24CE9E',
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  alignItems: 'center',
                  height: 100,
                },
              ]}>
              {/*  colom 1 */}
              <View
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  backgroundColor: '#D9D9D9',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialIcon
                  size={30}
                  style={{color: '#24CE9E'}}
                  name="queue"
                />
              </View>
              {/* colom 2 */}
              <View style={{justifyContent: 'space-between'}}>
                {/* ============ */}
                <View>
                  <View style={[StyleFlatlist.boxStyle]}>
                    <View
                      style={
                        [StyleFlatlist.boxColors, {backgroundColor: colorPink}]
                        // borderRadius: 7,
                      }
                    />
                    <Text>{item.IdAntrian}</Text>
                  </View>
                  <View style={[StyleFlatlist.boxStyle]}>
                    <View
                      style={
                        [StyleFlatlist.boxColors, {backgroundColor: colorUngu}]
                        // borderRadius: 7,
                      }
                    />
                    <Text>{item.IdAntrian}</Text>
                  </View>
                </View>
              </View>
              {/* colom 3 */}
              <View style={{justifyContent: 'space-between'}}>
                {/* ============ */}
                <View>
                  <View style={[StyleFlatlist.boxStyle]}>
                    <View
                      style={{
                        height: 14,
                        width: 14,
                        // borderRadius: 7,
                        backgroundColor: colorHijau,
                      }}
                    />
                    <Text>{item.WaktuPendaftaran}</Text>
                  </View>
                  <View style={[StyleFlatlist.boxStyle]}>
                    <View
                      style={
                        [
                          StyleFlatlist.boxColors,
                          {backgroundColor: colorKuning},
                        ]
                        // borderRadius: 7,
                      }
                    />
                    <Text>{item.WaktuSelesai}</Text>
                  </View>
                </View>
              </View>
              {/* ============================== */}
            </View>
          )}
        />
      )}
    </View>
  );
};
// ============================================
const AntrianLayananScreen = () => {
  return <MyTabs />;
};

export default AntrianLayananScreen;

const StyleFlatlist = StyleSheet.create({
  boxColors: {
    color: '#24CE9E',
    height: 14,
    width: 14,
  },
  boxStyle: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginVertical: 5,
  },
  containerInfoWithColor: {
    flexDirection: 'row',
    // backgroundColor: 'lavender',
    alignItems: 'center',
  },
});
