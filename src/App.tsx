import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import {FavoriteProvider} from './hooks/useFavorite';

import {Routes} from './routes/Routes';

import theme from './global/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#121212" />
        <FavoriteProvider>
          <Routes />
        </FavoriteProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
