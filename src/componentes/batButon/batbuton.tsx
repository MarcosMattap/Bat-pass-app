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
    setPass('');
  }

  // Adicionando estado para controlar o feedback visual do botão
  const [generateButtonPressed, setGenerateButtonPressed] = useState(false);
  const [copyButtonPressed, setCopyButtonPressed] = useState(false);

  return (
    <>
      <BatImput pass={pass} />

      <Pressable
        onPressIn={() => setGenerateButtonPressed(true)} // Quando o botão é pressionado
        onPressOut={() => setGenerateButtonPressed(false)} // Quando o toque é removido do botão
        onPress={handleGenerateButton}
        style={[styles.butoon, generateButtonPressed && styles.buttonPressed]} // Aplicando estilo condicional
      >
        <Text style={styles.Text}>GENERATE</Text>
      </Pressable>

      <Pressable
        onPressIn={() => setCopyButtonPressed(true)} // Quando o botão é pressionado
        onPressOut={() => setCopyButtonPressed(false)} // Quando o toque é removido do botão
        onPress={handleCopyButoon}
        style={[styles.butoon, copyButtonPressed && styles.buttonPressed]} // Aplicando estilo condicional
      >
        <Text style={styles.Text}>⚡ COPY </Text>
      </Pressable>
    </>
  );
}
