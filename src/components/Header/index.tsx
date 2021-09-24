import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, StyledIcon} from './styles';
import {TouchableOpacity} from 'react-native';

export function Header() {
  const navigation = useNavigation();
  return (
    <Container>
      <StyledIcon name="cart" color="#eeeeee" size={20} />
      <StyledIcon name="bell" color="#eeeeee" size={20} />
      <TouchableOpacity
        onPress={() => navigation.navigate('Favoritos')}
        activeOpacity={0.9}>
        <StyledIcon name="cards-heart" color="#eeeeee" size={20} />
      </TouchableOpacity>
    </Container>
  );
}
