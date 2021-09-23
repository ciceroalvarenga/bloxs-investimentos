import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {RectButtonProps} from 'react-native-gesture-handler';

import {Container, Title} from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  checked?: boolean;
};

export function Category({title, checked = false, ...rest}: Props) {
  return (
    <Container {...rest} checked={checked} activeOpacity={0.9}>
      <Title checked={checked}>{title}</Title>
    </Container>
  );
}
