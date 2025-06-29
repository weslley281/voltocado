import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import AnaliseSimples from '../screens/AnaliseSimples';
import AnaliseMalhas from '../screens/AnaliseMalhas';
import AnaliseCorrente from '../screens/AnaliseCorrente';
import AnaliseTensao from '../screens/AnaliseTensao';
import AnalisePotencia from '../screens/AnalisePotencia';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AnaliseSimples" component={AnaliseSimples} options={{ title: 'Análise Simples' }} />
      <Stack.Screen name="AnaliseMalhas" component={AnaliseMalhas} options={{ title: 'Análise de Malhas' }} />
      <Stack.Screen name="AnaliseCorrente" component={AnaliseCorrente} options={{ title: 'Análise de Corrente' }} />
      <Stack.Screen name="AnaliseTensao" component={AnaliseTensao} options={{ title: 'Análise de Tensão' }} />
      <Stack.Screen name="AnalisePotencia" component={AnalisePotencia} options={{ title: 'Análise de Potência' }} />
    </Stack.Navigator>
  );
}
