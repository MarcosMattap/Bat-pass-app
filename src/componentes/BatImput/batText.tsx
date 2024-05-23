import React from 'react';
import {TextInput } from 'react-native';
import { styles } from './batTextStyle';

interface BatImputProps{
  pass:string
}
export function BatImput(props : BatImputProps) {
  return (
    
        <TextInput style={styles.input} placeholder='Pass' value={props.pass}>

        </TextInput>
    
  );
}