import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import AnaliseSimples from '../screens/AnaliseSimples';
import AnaliseMalhas from '../screens/AnaliseMalhas';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AnaliseSimples" component={AnaliseSimples} options={{ title: 'Análise Simples' }} />
      <Stack.Screen name="AnaliseMalhas" component={AnaliseMalhas} options={{ title: 'Análise de Malhas' }} />
    </Stack.Navigator>
  );
}
