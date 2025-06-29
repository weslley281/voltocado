import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Alert } from 'react-native';
import GenericButton from '../components/GerenericButton';

export default function AnaliseSimples() {
  const [tensao, setTensao] = useState('');
  const [corrente, setCorrente] = useState('');
  const [resistencia, setResistencia] = useState('');
  const [resultado, setResultado] = useState('');
  const [resultadoPotencia, setResultadoPotencia] = useState('');

  const calcular = () => {
    const v = parseFloat(tensao);
    const i = parseFloat(corrente);
    const r = parseFloat(resistencia);

    const valoresInformados = [!isNaN(v), !isNaN(i), !isNaN(r)].filter(Boolean).length;

    if (valoresInformados < 2) {
      Alert.alert('Erro', 'Informe pelo menos dois valores para calcular o terceiro.');
      return;
    }

    if (isNaN(v)) {
      const resultadoTensao = i * r;
      setResultado(`Tensão calculada: ${resultadoTensao.toFixed(2)} V`);
      const potencia = i * resultadoTensao;
      setResultadoPotencia(`Potência calculada: ${potencia.toFixed(2)} W`);
    } else if (isNaN(i)) {
      const resultadoCorrente = v / r;
      setResultado(`Corrente calculada: ${resultadoCorrente.toFixed(2)} A`);
      const potencia = v * resultadoCorrente;
      setResultadoPotencia(`Potência calculada: ${potencia.toFixed(2)} W`);
    } else if (isNaN(r)) {
      const resultadoResistencia = v / i;
      setResultado(`Resistência calculada: ${resultadoResistencia.toFixed(2)} Ω`);
      const potencia = v * i;
      setResultadoPotencia(`Potência calculada: ${potencia.toFixed(2)} W`);
    }
  };

  const limpar = () => {
    setTensao('');
    setCorrente('');
    setResistencia('');
    setResultado('');
    setResultadoPotencia('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Análise de Circuitos Elétricos Simples</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Tensão (V)"
        value={tensao}
        onChangeText={setTensao}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Corrente (A)"
        value={corrente}
        onChangeText={setCorrente}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Resistência (Ω)"
        value={resistencia}
        onChangeText={setResistencia}
      />

      <GenericButton button="primary" icon="calculator" color="white" size={24} title='Calcular' onPress={calcular} />

      <GenericButton button='secondary' icon="backspace" color="white" size={24} title="Limpar" onPress={limpar} />

      {resultado !== '' && <Text style={styles.resultado}>{resultado}</Text>}
      {resultadoPotencia !== '' && <Text style={styles.resultado}>{resultadoPotencia}</Text>}
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
