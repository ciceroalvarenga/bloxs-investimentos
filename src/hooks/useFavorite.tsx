import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import {PropsNews} from '../screens/Conteudos';

import AsyncStorage from '@react-native-async-storage/async-storage';

interface FavoriteContextData {
  addToFavorite(news: PropsNews | undefined): Promise<void>;
  removeFromFavorite(id: number): Promise<void>;
  favorites: PropsNews[];
}

const FavoriteContext = createContext<FavoriteContextData>(
  {} as FavoriteContextData,
);

export const FavoriteProvider: React.FC = ({children}) => {
  const [favorites, setFavorites] = useState<PropsNews[]>([]);

  useEffect(() => {
    async function getDataNews() {
      const news = await AsyncStorage.getItem('news:Bloxs');

      if (news) {
        const newsFormatted = JSON.parse(news);
        setFavorites(newsFormatted);
      }
    }
    getDataNews();
    return undefined;
  }, []);

  const addToFavorite = useCallback(
    async (news: PropsNews) => {
      const newsFound = favorites.find(favorite => favorite.id === news.id);

      if (!newsFound) {
        setFavorites(prevFavorites => [
          ...prevFavorites,
          {
            ...news,
          },
        ]);
      }

      await AsyncStorage.setItem(
        'news:Bloxs',
        JSON.stringify([...favorites, news]),
      );
    },
    [favorites],
  );

  const removeFromFavorite = useCallback(
    async (id: number) => {
      const newsFound = favorites.find(favorite => favorite.id === id);

      if (newsFound) {
        const favoritesFinal = favorites.filter(
          favorite => favorite.id !== newsFound.id,
        );

        setFavorites(favoritesFinal);
        await AsyncStorage.setItem(
          'news:Bloxs',
          JSON.stringify(favoritesFinal),
        );
      }
    },
    [favorites],
  );

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addToFavorite,
        removeFromFavorite,
      }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export function useFavorites(): FavoriteContextData {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error('useCart must be used with an FavoriteProvider');
  }

  return context;
}
