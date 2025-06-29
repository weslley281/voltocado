import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
        <Image source={require('../images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Voltocado</Text>
        <Text style={styles.subtitle}>Análise de Circuitos Elétricos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: '#145291',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 20,
        borderRadius: 10,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#fff',
        fontSize: 16,
    },
})