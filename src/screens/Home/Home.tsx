import React from "react";
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';
import { BatLogo } from "../../componentes/batLogo/batLOgo";
import { BatButon } from "../../componentes/batButon/batbuton";


export default function Home() {
    return (
        <View style={styles.AppContainer}>
            <View style={styles.logoConteiner}>
                <BatLogo />
            </View>
            <View style={styles.inputConteiner}>
                <BatButon />
            </View>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />

        </View>



    )
}

