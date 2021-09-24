import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Conteudos} from '../screens/Conteudos';
import {Favoritos} from '../screens/Favoritos';

const Stack = createNativeStackNavigator();

export function ConteudoRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Conteudo" component={Conteudos} />
      <Stack.Screen name="Favoritos" component={Favoritos} />
    </Stack.Navigator>
  );
}
