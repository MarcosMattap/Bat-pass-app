import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import { BatImput } from '../BatImput/batText';
import generatePass from '../../services/passwordServices';
import * as clipboard from 'expo-clipboard'
import { styles } from './batbutonStyles';

export function BatButon() {
  const [pass, setPass] = useState('')

  function handleGenerateButton() {
    let generateToken = generatePass()
    setPass(generateToken)
  }

  function handleCopyButoon(){
    clipboard.setStringAsync(pass)
  }
  return (
    <>
      <BatImput pass={pass} />

      <Pressable onPress={handleGenerateButton} style={styles.butoon} >

        <Text style={styles.Text}>GENERATE</Text>

      </Pressable>

      <Pressable style={styles.butoon} onPress={handleCopyButoon}>
        <Text style={styles.Text}>⚡ COPY </Text>
      </Pressable>
    </>
  );
}