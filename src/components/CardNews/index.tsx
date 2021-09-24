import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {PropsNews} from '../../screens/Conteudos';

import {
  Container,
  Image,
  Title,
  StyledIcon,
  IconConainerButton,
} from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  checked?: PropsNews | undefined;
  urlImage: string;
  handleAddToFavorite: (news: PropsNews) => Promise<void>;
  news: PropsNews;
};

export function CardNews({
  urlImage,
  title,
  news,
  checked,
  handleAddToFavorite,
  ...rest
}: Props) {
  return (
    <>
      <Container {...rest}>
        <Image source={{uri: urlImage}} />
        <Title>{title}</Title>
        <IconConainerButton
          onPress={() => handleAddToFavorite(news)}
          activeOpacity={0.5}>
          <StyledIcon name={!!checked ? 'heart' : 'heart-outline'} />
        </IconConainerButton>
      </Container>
    </>
  );
}
