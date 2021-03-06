import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Carteira} from '../screens/Carteira';
import {Investir} from '../screens/Investir';
import {Perfil} from '../screens/Perfil';
import {Portifolio} from '../screens/Portifolio';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {InvestmentButtom} from '../components/InvestmentButtom';
import {Header} from '../components/Header';
import {ConteudoRoutes} from './conteudo.routes';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      initialRouteName="Conteudos"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#121212',
          shadowColor: 'transparent',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#eeeeee',
          fontSize: 20,
        },
        headerRight: () => (
          <>
            <Header />
          </>
        ),
        tabBarStyle: {
          backgroundColor: '#323232',
          borderTopColor: 'transparent',
          paddingBottom: 10,
          paddingTop: 15,
          height: 70,
        },
        tabBarActiveTintColor: '#eeeeee',
        tabBarInactiveTintColor: '#8c8c8c',
      }}>
      <Tab.Screen
        name="Carteira"
        component={Carteira}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="wallet-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Portifolio"
        component={Portifolio}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="trending-up" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Investir"
        component={Investir}
        options={{
          tabBarIcon: ({size}) => (
            <InvestmentButtom size={size} color={'#121212'} />
          ),
        }}
      />
      <Tab.Screen
        name="Conteudos"
        component={ConteudoRoutes}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="file-document-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="account-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
