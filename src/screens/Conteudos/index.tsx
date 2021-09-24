import {stringify} from 'qs';
import React, {useEffect, useState} from 'react';
import {Button, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {CardNews} from '../../components/CardNews';
import {CategorySelect} from '../../components/CategorySelect';
import {FooterList} from '../../components/FooterList';
import {Header} from '../../components/Header';
import {Shimmer} from '../../components/Shimmer';
import {getNews} from './conteudosServices';

import {Container, ContainerCard} from './styles';

type PropsNews = {
  id: number;
  file: string;
  title: {
    rendered: string;
  };
  _embedded: {
    ['wp:featuredmedia']: [
      {
        source_url: string;
      },
    ];
  };
};

export function Conteudos() {
  const [category, setCategory] = useState('1');
  const [news, setNews] = useState<PropsNews[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingShimmer, setLoadingShimmer] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoadingShimmer(true);
    loadApi();
  }, [category]);

  async function loadApi() {
    if (loading) return;
    setLoading(true);
    const response = await getNews({page, category});
    setLoadingShimmer(false);
    setNews([...news, ...response]);
    setPage(page + 1);
    setLoading(false);
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
    setPage(1);
    setNews([]);
  }

  return (
    <Container>
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      <ContainerCard>
        {loadingShimmer ? (
          <>
            <Shimmer />
            <Shimmer />
          </>
        ) : (
          <FlatList
            data={news}
            style={{marginBottom: 65}}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <>
                <CardNews
                  key={item.id}
                  title={item.title.rendered}
                  urlImage={item._embedded['wp:featuredmedia'][0].source_url}
                />
              </>
            )}
            onEndReached={loadApi}
            onEndReachedThreshold={0.1}
            ListFooterComponent={<FooterList load={loading} />}
          />
        )}
      </ContainerCard>
    </Container>
  );
}
