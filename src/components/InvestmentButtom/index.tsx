import React from 'react';
import DolarIcon from 'react-native-vector-icons/FontAwesome';

import {Container} from './styles';

interface InvestmentButtomProps {
  size: number;
  color: string;
}

export function InvestmentButtom({size, color}: InvestmentButtomProps) {
  return (
    <Container>
      <DolarIcon name="dollar" size={size} color={color} />
    </Container>
  );
}
