import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {hijau, putih, ungu} from '../../Assets/StylingComponent/Coloring';
// import { white } from '../../Assets/StylingComponent/Coloring';

export const stylesDariGaya = StyleSheet.create({
  // Text=--------
  textDef: {
    // fontFamily: 'roboto',
    fontSize: 16,
    color: putih,
  },
  textColorWhite: {color: putih},
  TextMediumBold: {
    fontSize: 18,
    fontWeight: '700',
  },
  TextMediumBoldP: {
    fontSize: 18,
    fontWeight: '700',
    color: putih,
  },
  contentCenter: {justifyContent: 'center', alignItems: 'center'},
  TextBold: {
    fontSize: 20,
    fontWeight: '900',
  },
  TextBoldP: {
    fontSize: 20,
    fontWeight: '900',
    color: putih,
  },
  textCenter: {
    textAlign: 'center',
  },
  paddingDef: {paddingHorizontal: 30},
  Tombols: {
    elevation: 5,
    padding: 16,
    width: 250,
    backgroundColor: hijau,
    borderRadius: 50, 
    
  },
  formInput: {
    borderWidth: 2,
    borderColor: hijau,
    borderRadius: 50,
    marginTop: 5,
    height: 50, backgroundColor:putih
  },
  headerBox: {
    backgroundColor: hijau,
    height: 130,
    borderBottomEndRadius: 20,
  },
  menu: {
    // backgroundColor: '#24CE9E',
    height: 120,
    borderLeftWidth: 3,
    width: 160,
    elevation: 2,
    marginHorizontal: 10,
  },
  fotoProfile: {height: 60, width: 60, borderRadius: 60},
  // profile page style
  listData: {
    height: 73,
    backgroundColor: putih,
    marginTop: 5,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: ungu,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  textDataStyle: {
    color: hijau,
  },
  containerBoxHijau: {
    marginHorizontal: 22,
    borderWidth: 2,
    borderColor: hijau,
    paddingHorizontal: 5,
    backgroundColor: putih,
    marginTop: 30,
    flex: 1,
  },
  BorderLeftHijau: {
    borderLeftWidth: 3,
    borderLeftColor: hijau,

    paddingLeft: 10,
  },
  lineSpaceStyle: { marginTop: 5},
  // * list for kelola users, antrian, dan upload formulir
  listStyle : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderLeftWidth: 3,
    borderLeftColor: hijau,
    elevation: 2,
    marginVertical: 5,
    backgroundColor: putih,
    // alignItems: 'center',
  }
});
