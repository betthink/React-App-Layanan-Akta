import {View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SesionScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);
  const [level, setLevel] = useState("");
  const checkSesion = () => {
   AsyncStorage.getItem('Level').then(d=>{setLevel(d)});

  if(level == "Umum") {
navigation.navigate("HomeUmum");
  } else if (level == "Admin") {
    navigation.navigate('AdminPageNavigation', {idUser: IdAdmin});
  } else {
    navigation.navigate("Logins");
  }
 

    // setTimeout(() => {
    // //   setAnimating(false);

    // });
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

export default SesionScreen;
