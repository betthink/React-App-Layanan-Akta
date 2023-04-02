import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import {hijau, putih, putihGelap} from '../../Assets/StylingComponent/Coloring';
import {stylesDariGaya} from '../Components/Gayaaja';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {pickSingle, isCancel} from 'react-native-document-picker';
import DocumentPicker from 'react-native-document-picker';

// fungsi upload file
async function uploadBerkas() {
  try {
    // console.log(test.pickSingle());
    const doc = await DocumentPicker.pick({
      type: [DocumentPicker.types.pdf],

    });
    // let {uri} = doc;
    // setImage(doc);
    console.log(doc[0].uri, "ini array");
    console.log(doc, "ini array");
    // console.log(uri, "ini adalah uri dari file terpilih");
  } catch (err) {
    console.log(err);
    if (isCancel(err)) {
      console.log('canceled', err);
    } else {
      console.log(err);
    }
  }
}
// async function openDocument() {
//   try {
//     // console.log(test.pickSingle());
//     const doc = await DocumentPicker.pick({
//       type: [DocumentPicker.types.images],

//     });
//     // let {uri} = doc;
//     setImage(doc);
//     console.log(doc[0], "ini array");
//     // console.log(uri, "ini adalah uri dari file terpilih");
//   } catch (err) {
//     console.log(err);
//     if (isCancel(err)) {
//       console.log('canceled', err);
//     } else {
//       console.log(err);
//     }
//   }
// }

const BuatAntrian = ({navigation}) => {
  const IconAddFile = 'note-add';
  return (
    <View style={{flex: 1, backgroundColor: putihGelap}}>
      {/* header */}
      <View style={[stylesDariGaya.headerBox, {justifyContent: 'center'}]}>
        {/* pading horizontal */}
        <View
          style={{
            paddingHorizontal: 22,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
            onPress={() => navigation.goBack()}>
            <MaterialIcon name="arrow-back-ios" size={18} color={putih} />
            <Text style={[stylesDariGaya.TextMediumBold, {color: putih}]}>
              Buat Antrian
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* file input */}

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 2,
          borderColor: hijau,
          marginVertical: 10,
          marginHorizontal: 22,
          paddingVertical: 10,
          flex: 1,
        }}>
        <ScrollView style={{flex: 1, marginVertical: 20}}>
          {/* Formulir Permohonan data */}
          <View style={[styleAntian.formInputFile]}>
            <Text style={[styleAntian.fontContent]}>
              Formulir Permohonan akta
            </Text>
            <TouchableOpacity
              onPress={() => {
                uploadBerkas();
              }}>
              <MaterialIcon color={hijau} size={35} name={IconAddFile} />
            </TouchableOpacity>
          </View>
          {/* Scan KK */}
          <View style={[styleAntian.formInputFile]}>
            <Text style={[styleAntian.fontContent]}>Scan KK</Text>
            <TouchableOpacity
              onPress={() => {
                uploadBerkas();
              }}>
              <MaterialIcon color={hijau} size={35} name={IconAddFile} />
            </TouchableOpacity>
          </View>
          {/* Scan KTP Ibu */}
          <View style={[styleAntian.formInputFile]}>
            <Text style={[styleAntian.fontContent]}>Scan KTP Ibu</Text>
            <TouchableOpacity
              onPress={() => {
                uploadBerkas();
              }}>
              <MaterialIcon color={hijau} size={35} name={IconAddFile} />
            </TouchableOpacity>
          </View>
          {/* Scan KTP Bapak */}
          <View style={[styleAntian.formInputFile]}>
            <Text style={[styleAntian.fontContent]}>Scan KTP Bapak</Text>
            <TouchableOpacity
              onPress={() => {
                uploadBerkas();
              }}>
              <MaterialIcon color={hijau} size={35} name={IconAddFile} />
            </TouchableOpacity>
          </View>
          {/* Scan Buku Nikah */}
          <View style={[styleAntian.formInputFile]}>
            <Text style={[styleAntian.fontContent]}>Scan Buku Nikah</Text>
            <TouchableOpacity
              onPress={() => {
                uploadBerkas();
              }}>
              <MaterialIcon color={hijau} size={35} name={IconAddFile} />
            </TouchableOpacity>
          </View>
          {/* ScanSurat keterangan Lahir/SPTJM-Pdf */}
          <View style={[styleAntian.formInputFile]}>
            <Text style={[styleAntian.fontContent, {width: '70%'}]}>
              Scan Surat keterangan Lahir/SPTJM-Pdf
            </Text>
            <TouchableOpacity
              onPress={() => {
                uploadBerkas();
              }}>
              <MaterialIcon color={hijau} size={35} name={IconAddFile} />
            </TouchableOpacity>
          </View>
          {/* Scan KTP/KK 2 (Dua) Orang saksi*/}
          <View style={[styleAntian.formInputFile]}>
            <Text style={[styleAntian.fontContent]}>
              Scan KTP/KK 2 (Dua) Orang saksi
            </Text>
            <TouchableOpacity
              onPress={() => {
                uploadBerkas();
              }}>
              <MaterialIcon color={hijau} size={35} name={IconAddFile} />
            </TouchableOpacity>
          </View>
          {/* tombol buat antrian */}
          <View style={{alignSelf: 'center', marginVertical: 20}}>
            <TouchableOpacity
              style={[stylesDariGaya.Tombols, stylesDariGaya.contentCenter]}>
              <Text style={[{color: putih, fontWeight: '700', fontSize: 16}]}>
                Buat Antrian
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default BuatAntrian;

export const styleAntian = StyleSheet.create({
  formInputFile: {
    flexDirection: 'row',
    // width: 330,
    // height: 40,\\
    borderWidth: 2,
    borderColor: hijau,
    padding: 2,
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: putih,
    alignItems: 'center',
    marginTop: 20,
    // alignSelf: 'center', 
    // marginHorizontal: 50
  },
  fontContent: {
    fontSize: 14,
  },
});
