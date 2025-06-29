import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { evaluate, round, format, fraction } from 'mathjs';

export default function AnaliseMalhas() {
  const [R11, setR11] = useState('');
  const [R12, setR12] = useState('');
  const [V1, setV1] = useState('');
  const [R21, setR21] = useState('');
  const [R22, setR22] = useState('');
  const [V2, setV2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const a = parseFloat(R11);
    const b = parseFloat(R12);
    const c = parseFloat(V1);
    const d = parseFloat(R21);
    const e = parseFloat(R22);
    const f = parseFloat(V2);

    if ([a, b, c, d, e, f].some(val => isNaN(val))) {
      Alert.alert('Erro', 'Preencha todos os campos com números válidos.');
      return;
    }

    try {
      const A = [
        [a, b],
        [d, e]
      ];
      const B = [c, f];

      // Resolvendo o sistema A * x = B
      const math = require('mathjs');
      const result = math.lusolve(A, B);

      const i1 = result[0][0];
      const i2 = result[1][0];

      setResultado(
        `Corrente na malha 1 (I1): ${i1.toFixed(2)} A\nCorrente na malha 2 (I2): ${i2.toFixed(2)} A`
      );
    } catch (error) {
      Alert.alert('Erro ao calcular', 'Verifique os valores informados. Sistema pode ser indeterminado.');
    }
  };

  const limpar = () => {
    setR11(''); setR12(''); setV1('');
    setR21(''); setR22(''); setV2('');
    setResultado('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Análise de Malhas</Text>

      <Text style={styles.subtitle}>Equação da Malha 1: R11 * I1 + R12 * I2 = V1</Text>
      <TextInput style={styles.input} placeholder="R11 (Ω)" keyboardType="numeric" value={R11} onChangeText={setR11} />
      <TextInput style={styles.input} placeholder="R12 (Ω)" keyboardType="numeric" value={R12} onChangeText={setR12} />
      <TextInput style={styles.input} placeholder="V1 (V)" keyboardType="numeric" value={V1} onChangeText={setV1} />

      <Text style={styles.subtitle}>Equação da Malha 2: R21 * I1 + R22 * I2 = V2</Text>
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
