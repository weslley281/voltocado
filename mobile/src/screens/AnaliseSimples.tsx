import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { api } from '../services/api';

export default function AnaliseSimples() {
  const [tensao, setTensao] = useState('');
  const [corrente, setCorrente] = useState('');
  const [resistencia, setResistencia] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = async () => {
    const v = tensao ? parseFloat(tensao) : null;
    const i = corrente ? parseFloat(corrente) : null;
    const r = resistencia ? parseFloat(resistencia) : null;

    const informados = [v, i, r].filter(val => val !== null && !isNaN(val)).length;

    if (informados < 2) {
      Alert.alert('Erro', 'Informe pelo menos dois valores para calcular os outros.');
      return;
    }

    const payload = {
      tensao: isNaN(v!) ? null : v,
      corrente: isNaN(i!) ? null : i,
      resistencia: isNaN(r!) ? null : r
    };

    try {
      const response = await api.post('ohm', payload);
      const data = response.data;

      const resultadoFormatado = 
        `Tensão: ${data.tensao.toFixed(2)} V\n` +
        `Corrente: ${data.corrente.toFixed(2)} A\n` +
        `Resistência: ${data.resistencia.toFixed(2)} Ω\n` +
        `Potência: ${data.potencia.toFixed(2)} W`;

      setResultado(resultadoFormatado);
    } catch (error: any) {
      console.error(error);
      Alert.alert('Erro', error.response?.data?.message || 'Erro ao conectar com o servidor.');
    }
  };

  const limpar = () => {
    setTensao('');
    setCorrente('');
    setResistencia('');
    setResultado('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Análise de Circuitos Elétricos Simples (API)</Text>

      <TextInput
        style={styles.input}
        placeholder="Tensão (V)"
        keyboardType="numeric"
        value={tensao}
        onChangeText={setTensao}
      />
      <TextInput
        style={styles.input}
        placeholder="Corrente (A)"
        keyboardType="numeric"
        value={corrente}
        onChangeText={setCorrente}
      />
      <TextInput
        style={styles.input}
        placeholder="Resistência (Ω)"
        keyboardType="numeric"
        value={resistencia}
        onChangeText={setResistencia}
      />

      <Button title="Calcular" onPress={calcular} />
      <View style={{ height: 10 }} />
      <Button title="Limpar" color="#888" onPress={limpar} />

      {resultado !== '' && <Text style={styles.resultado}>{resultado}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
    flexGrow: 1,
    gap: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  resultado: {
    marginTop: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#145291',
  },
});
