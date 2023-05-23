import {View, Text, Button, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import ButtonBack from './Components/ButtonBack';
import {stylesDariGaya} from './Components/ImportedStyles';
import ListUploadFile from './Components/ListUploadFile';
import DefaultButtonBox from './Components/DefaultButtonBox';
import {hijau} from '../Assets/StylingComponent/Coloring';
import DocumentPicker from 'react-native-document-picker';
import {ipAdress} from './Components/Url';
const DataFileUploadScreen = ({navigation, route}) => {
  // add file
  // const {IdAnak, IdUser} = route.params;
  const IdAnak = 16;
  const IdUser = 1;
  const [FileKK, setFileKK] = useState(null);
  const [FileKtpIbu, setFileKtpIbu] = useState(null);
  const [FileKtpAyah, setFileKtpAyah] = useState(null);
  const [FileKetNikah, setFileKetNikah] = useState(null);
  const [FileKetLahirAnak, setFileKetLahirAnak] = useState(null);
  const [FileSaksi1, setFileSaksi1] = useState(null);
  const [FileSaksi2, setFileSaksi2] = useState(null);
  // Function Pick document

  const pickDocument = async setData => {
    try {
      const result = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
      });
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };
  const uploadFile = async () => {
    try {
      const result = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(result, "ini result");
      const formData = new FormData();
      formData.append('file', {
        uri: Platform.OS === 'android' ? `file://${result.uri}` : result.uri,
        name: result.name,
        type: result.type,
      });

      const response = await fetch(
        `${ipAdress}aplikasiLayananAkta/addData/upload.php`,
        {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      console.log('Upload response:', response.text());
      console.log(response);

    } catch (error) {
      console.log('Document Picker Error:', error);
    }
  };

  useEffect(() => {
    if (FileKK == null) {
      console.log(FileKK);
    } else {
      console.log(FileKK.name);
    }
    // FileKK == !null ? console.log(FileKK.uri) : null;
    console.log(IdAnak, IdUser);
  }, [FileKK]);

  return (
    <View style={[{flex: 1}]}>
      <View style={[stylesDariGaya.headerBox, {justifyContent: 'center'}]}>
        <ButtonBack buttontext={'Upload persyaratan'} />
      </View>
      {/* content */}
      <ScrollView
        contentContainerStyle={[{paddingHorizontal: 20, paddingVertical: 20}]}>
        {/* KK */}
        <ListUploadFile
          titleList={FileKK == null ? 'ScanKK' : FileKK.name}
          MaterialIconName={'file-document'}
          onPressAction={uploadFile}
        />
        {/* KTP IBU */}
        <ListUploadFile
          titleList={FileKtpIbu == null ? 'Scan KTP Ibu' : FileKtpIbu.name}
          MaterialIconName={'file-document'}
          onPressAction={() => pickDocument(setFileKtpIbu)}
        />
        {/* KTP Ayah */}
        <ListUploadFile
          titleList={FileKtpAyah == null ? 'Scan KTP Ayah' : FileKtpAyah.name}
          MaterialIconName={'file-document'}
          onPressAction={() => pickDocument(setFileKtpAyah)}
        />
        {/* KTP Saksi1 */}
        <ListUploadFile
          titleList={FileKtpIbu == null ? 'Scan KTP Saksi1' : FileKtpIbu.name}
          MaterialIconName={'file-document'}
          onPressAction={() => pickDocument(setFileKtpIbu)}
        />
        {/* KTP Saksi2 */}
        <ListUploadFile
          titleList={FileSaksi1 == null ? 'Scan KTP Saksi2' : FileSaksi1.name}
          MaterialIconName={'file-document'}
          onPressAction={() => pickDocument(setFileSaksi1)}
        />
        {/* Ket NIkah */}
        <ListUploadFile
          titleList={
            FileKetNikah == null ? 'Scan Keterangan Nikah' : FileKetNikah.name
          }
          MaterialIconName={'file-document'}
          onPressAction={() => pickDocument(setFileKetNikah)}
        />
        {/* Ket lahir anak */}
        <ListUploadFile
          titleList={
            FileKetLahirAnak == null
              ? 'Scan Keterangan lahir anak'
              : FileKetLahirAnak.name
          }
          MaterialIconName={'file-document'}
          onPressAction={() => pickDocument(setFileKetLahirAnak)}
        />
        {/* button/ */}
        <DefaultButtonBox
          Title={'Submit'}
          TitleColor={hijau}
          onClickAction={() => {
            navigation.navigate("AntrianLayananScreen")
          console.log('Submit preesed')}}
        />
      </ScrollView>
    </View>
  );
};

export default DataFileUploadScreen;