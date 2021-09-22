import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, View} from 'react-native';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';

import theme from './global/styles/theme';
import {Routes} from './routes';
import {Conteudos} from './screens/Conteudos';
import store from './store/Store';

function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor="#121212" />
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
