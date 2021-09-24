import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, View} from 'react-native';
import {ThemeProvider} from 'styled-components';

import theme from './global/styles/theme';
import {Routes} from './routes/routes';

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
