import React from 'react';

import {Container, Image, Title} from './styles';

type Props = {
  urlImage: string;
  title: string;
};

export function CardNews({urlImage, title}: Props) {
  return (
    <>
      <Container>
        <Image source={{uri: urlImage}} />
        <Title>{title}</Title>
      </Container>
    </>
  );
}
