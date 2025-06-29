import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { api } from '../services/api';


export default function AnaliseMalhas() {
  const [R11, setR11] = useState('');
  const [R12, setR12] = useState('');
  const [R21, setR21] = useState('');
  const [R22, setR22] = useState('');
  const [V1, setV1] = useState('');
  const [V2, setV2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = async () => {
    const a = parseFloat(R11);
    const b = parseFloat(R12);
    const c = parseFloat(R21);
    const d = parseFloat(R22);
    const v1 = parseFloat(V1);
    const v2 = parseFloat(V2);

    if ([a, b, c, d, v1, v2].some(val => isNaN(val))) {
      Alert.alert('Erro', 'Preencha todos os campos corretamente.');
      return;
    }

    const payload = {
      coeficientes: [
        [a, b],
        [c, d]
      ],
      fontes: [v1, v2]
    };

    try {
      const response = await api.post('malhas', payload);
      const correntes = response.data.correntes;

      const resultadoFormatado = correntes
        .map((i: number, index: number) => `Corrente I${index + 1}: ${i.toFixed(2)} A`)
        .join('\n');

      setResultado(resultadoFormatado);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Falha ao conectar com o servidor ou calcular as correntes.');
    }
  };

  const limpar = () => {
    setR11(''); setR12(''); setR21(''); setR22('');
    setV1(''); setV2(''); setResultado('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Análise de Malhas (via API)</Text>

      <Text style={styles.subtitle}>Equação da Malha 1</Text>
      <TextInput style={styles.input} placeholder="R11 (Ω)" keyboardType="numeric" value={R11} onChangeText={setR11} />
      <TextInput style={styles.input} placeholder="R12 (Ω)" keyboardType="numeric" value={R12} onChangeText={setR12} />
      <TextInput style={styles.input} placeholder="V1 (V)" keyboardType="numeric" value={V1} onChangeText={setV1} />

      <Text style={styles.subtitle}>Equação da Malha 2</Text>
      <TextInput style={styles.input} placeholder="R21 (Ω)" keyboardType="numeric" value={R21} onChangeText={setR21} />
      <TextInput style={styles.input} placeholder="R22 (Ω)" keyboardType="numeric" value={R22} onChangeText={setR22} />
      <TextInput style={styles.input} placeholder="V2 (V)" keyboardType="numeric" value={V2} onChangeText={setV2} />

      <Button title="Calcular Correntes" onPress={calcular} />
      <View style={{ height: 10 }} />
      <Button title="Limpar" color="#888" onPress={limpar} />

      {resultado !== '' && (
        <Text style={styles.resultado}>{resultado}</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
    flexGrow: 1,
    gap: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 4,
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
