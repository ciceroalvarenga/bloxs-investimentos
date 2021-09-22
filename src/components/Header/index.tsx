import React from 'react';

import {Container, StyledIcon} from './styles';

export function Header() {
  return (
    <Container>
      <StyledIcon name="cart" color="#eeeeee" size={20} />
      <StyledIcon name="bell" color="#eeeeee" size={20} />
    </Container>
  );
}
