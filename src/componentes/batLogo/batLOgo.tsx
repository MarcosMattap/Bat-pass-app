import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './batLogoStyle';
import  batLogo from '../../../assets/batLogo.png';

export function BatLogo() {
  return (
    <>
        <Text style={styles.title}>BAT PASS GENERATE</Text>
        <Image  source={batLogo} style={{resizeMode:'contain', height:180}} />
    </>
  );
}