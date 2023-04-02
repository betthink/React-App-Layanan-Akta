import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {hijau, putih, putihGelap} from '../../Assets/StylingComponent/Coloring';
import {stylesDariGaya} from '../Components/Gayaaja';
import {fotoUrl} from '../../Assets/Url';
import axios from 'axios';
import {ipAdress} from '../Components/Url';
// import { SafeAreaView } from 'react-native-safe-area-context/lib/typescript/SafeAreaView';
export default function KelolaUserScreen({navigation}) {
  // * Fetch data from tabel userUmum
  const [dataApi, setDataApi] = useState([]);

  const url = ` ${ipAdress}/aplikasiLayananAkta/api/apiDataUsers.php`;
  const getApi = () => {
    axios({
      method: 'POST',
      url: `${url}`,
    })
      .then(res =>{
        let data = res.data;

        data = data.filter(d => d.Level == 'Umum');
        setDataApi(data)})
      .catch(err => console.log(err));
  };
  useEffect(() => {
    getApi();
    console.log(dataApi, 'ambil data dari dataApi');
  }, [getApi()]);
  // *end of code fetch data
  return (
    <View style={{flex: 1, backgroundColor: putihGelap}}>
      {/* header */}
      <View
        style={[
          stylesDariGaya.headerBox,
          {justifyContent: 'center', paddingHorizontal: 22},
        ]}>
        <Text style={[stylesDariGaya.TextBoldP]}>Kelola User</Text>
      </View>
      {/* list Account */}
      <SafeAreaView style={{paddingHorizontal: 22}}>
        <FlatList
          data={dataApi}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProfileUmumScreen', {Id: item.IdUmum})
              }>
              <View style={[stylesDariGaya.listStyle]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    // size={50}
                    style={[{width: 50, height: 50, borderRadius: 25}]}
                    // source={{uri: item.foto}}
                    source={{uri:item.FotoProfile}}
                  />

                  <Text style={{marginLeft: 10}}>{item.IdUmum}</Text>
                </View>
                <Text>{item.Username}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </View>
  );
}
