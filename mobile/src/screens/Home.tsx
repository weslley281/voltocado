import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MenuButton from '../components/MenuButton';
import Header from '../components/Header';

export default function Home() {
  const navigation = useNavigation<any>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <Text style={styles.title}>Análise de Circuitos Elétricos</Text>

      <MenuButton title="Análise Simples (Lei de Ohm)" onPress={() => navigation.navigate('AnaliseSimples')} />
      <MenuButton title="Análise de Malhas" onPress={() => navigation.navigate('AnaliseMalhas')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
});
