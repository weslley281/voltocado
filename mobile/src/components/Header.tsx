import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
        <Image source={require('../images/logo.png')} style={styles.logo} />
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
        width: 150,
        height: 150,
        marginBottom: 10,
    }
})