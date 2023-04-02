import {View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);
  const checkSesion = () => {
    setTimeout(() => {
      setAnimating(false);
      AsyncStorage.getItem('userName').then(value => {
        const iduser = AsyncStorage.getItem('idUser');
        console.log(iduser, "ini adalah id users dari async");
        value === null
          ? navigation.navigate('LoginU')
          : navigation.navigate('HomeUmum', {idUser: iduser});
      });
    });
  };
  useEffect(() => {
    checkSesion();
  }, []);
  return (
    <View style={[{justifyContent: 'center', alignItems: 'center'}]}>
      <ActivityIndicator animating={animating} color={'#fff'} size="large" />
    </View>
  );
};

export default SplashScreen;
