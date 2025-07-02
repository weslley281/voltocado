import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import GenericButton from '../components/GerenericButton';
import LoadingSpinner from '../components/LoadingSpinner';
import { api } from '../services/api';

export default function AnaliseParalelo() {
  const [resistencias, setResistencias] = useState(['']);
  const [resultado, setResultado] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const adicionarCampo = () => {
    setResistencias([...resistencias, '']);
  };

  const removerCampo = (index: number) => {
    const novas = resistencias.filter((_, i) => i !== index);
    setResistencias(novas.length === 0 ? [''] : novas);
  };

  const atualizarValor = (texto: string, index: number) => {
    const novas = [...resistencias];
    novas[index] = texto;
    setResistencias(novas);
  };

  const calcular = async () => {
    const valores = resistencias.map(r => parseFloat(r));

    if (valores.some(v => isNaN(v) || v <= 0)) {
      Alert.alert('Erro', 'Preencha todas as resistências com valores numéricos maiores que zero.');
      return;
    }

    const payload = { resistances: valores };

    try {
      setLoading(true);
      const response = await api.post('/paralelo', payload);
      const equivalente = response.data.equivalentResistance;
      setResultado(`Resistência Equivalente: ${equivalente.toFixed(2)} Ω`);
    } catch (error: any) {
      const msg = error.response?.data?.message || 'Erro ao conectar com o servidor.';
      Alert.alert('Erro de cálculo', msg);
      setResultado(null);
    } finally {
      setLoading(false);
    }
  };

  const limpar = () => {
    setResistencias(['']);
    setResultado(null);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <KeyboardAwareScrollView
            contentContainerStyle={styles.container}
            enableOnAndroid
            extraScrollHeight={20}
          >
            <Text style={styles.title}>Circuito em Paralelo</Text>

            {resistencias.map((valor, index) => (
              <View key={index} style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder={`Resistência R${index + 1} (Ω)`}
                  keyboardType="numeric"
                  value={valor}
                  onChangeText={texto => atualizarValor(texto, index)}
                />
                <Button
                  title="−"
                  color="#a00"
                  onPress={() => removerCampo(index)}
                />
              </View>
            ))}

            <GenericButton
              title="Adicionar Resistência"
                icon="plus"
                button="success"
                color="white"
                size={24}
                onPress={adicionarCampo}
            />

            <GenericButton
              title="Calcular Paralelo"
              icon="calculator"
              button="primary"
              color="white"
              size={24}
              onPress={calcular}
            />
            <GenericButton
              title="Limpar"
              icon="backspace"
              button="secondary"
              color="white"
              size={24}
              onPress={limpar}
            />

            {resultado && (
              <Text style={styles.resultado}>{resultado}</Text>
            )}
          </KeyboardAwareScrollView>

          {loading && <LoadingSpinner />}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  resultado: {
    marginTop: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#145291',
  },
});
