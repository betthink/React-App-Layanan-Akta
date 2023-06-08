import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { ungu } from '../../Assets/StylingComponent/Coloring';

const ListSyarat = ({title, bodyText}) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <View style={styleList.container}>
      <TouchableOpacity onPress={()=>setShowContent(!showContent)}>
        <View style={styleList.titleContainer}>
          <Text style={styleList.title}>{title}</Text>
          <MaterialIcon name={'keyboard-arrow-right'} size={30} />
        </View>
      </TouchableOpacity>

      {showContent && (
        <View style={styleList.body}>
          <Text style={{textAlign: 'justify'}}>{bodyText}</Text>
        </View>
      )}
    </View>
  );
};

export default ListSyarat;

const styleList = StyleSheet.create({
  container: {
    // width: 380,
    padding: 5,
    // borderRadius: 12,
    backgroundColor: '#fff',

    overflow: 'hidden',
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: ungu,
    marginHorizontal: 22,
    marginBottom: 5,
    // marginVertical: 5,
  },
  title: {
    fontSize: 16,
    color: '#2d2d2d',
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 300,
  },
  body: {
    paddingHorizontal: '3%',
    paddingVertical: '3%',
    width: 360,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
