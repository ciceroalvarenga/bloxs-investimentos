import React, {useContext} from 'react';
import {FlatList, Text} from 'react-native';
import {CardNews} from '../../components/CardNews';
import {useFavorites} from '../../hooks/useFavorite';
import {PropsNews} from '../Conteudos';

import {Container, ContainerCard} from './styles';

export function Favoritos() {
  const {favorites, addToFavorite, removeFromFavorite} = useFavorites();
  async function handleAddToFavorite(news: PropsNews) {
    const newsFound = favorites.find(favorite => favorite.id === news.id);
    if (!newsFound) {
      await addToFavorite(news);
    } else {
      await removeFromFavorite(news.id);
    }
  }

  return (
    <Container>
      <ContainerCard>
        <FlatList
          data={favorites}
          style={{marginBottom: 65}}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <>
              <CardNews
                key={item.id}
                news={item}
                handleAddToFavorite={() => handleAddToFavorite(item)}
                checked={favorites.find(favorite => favorite.id === item.id)}
                title={item.title.rendered}
                urlImage={item._embedded['wp:featuredmedia'][0].source_url}
              />
            </>
          )}
        />
      </ContainerCard>
    </Container>
  );
}
