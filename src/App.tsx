import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from 'styled-components';

import theme from './global/styles/theme';
import {Conteudos} from './screens/Conteudos';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={{flex: 1, backgroundColor: '#121212'}}>
        <Conteudos />
      </View>
    </ThemeProvider>
  );
}

export default App;
