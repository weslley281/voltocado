import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import AnaliseSimples from '../screens/AnaliseSimples';
import AnaliseMalhas from '../screens/AnaliseMalhas';
import AnaliseParalelo from '../screens/AnaliseParalelo';
import AnaliseSerie from '../screens/AnaliseSerie';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AnaliseSimples" component={AnaliseSimples} options={{ title: 'Análise Simples' }} />
      <Stack.Screen name="AnaliseMalhas" component={AnaliseMalhas} options={{ title: 'Análise de Malhas' }} />
      <Stack.Screen name="AnaliseParalelo" component={AnaliseParalelo} options={{ title: 'Análise em Paralelo' }} />
      <Stack.Screen name="AnaliseSerie" component={AnaliseSerie} options={{ title: 'Análise em Série' }} />
    </Stack.Navigator>
  );
}
