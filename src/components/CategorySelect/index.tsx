import React from 'react';
import {categories} from '../../utils/categories';
import {Category} from '../Category';

import {Container} from './styles';

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
};

export function CategorySelect({
  categorySelected,
  setCategory,
  ...rest
}: Props) {
  return (
    <Container
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 40}}
      {...rest}>
      {categories.map(category => (
        <Category
          key={category.id}
          title={category.title}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </Container>
  );
}
