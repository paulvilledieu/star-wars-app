import React, { createContext, ReactNode, useState } from 'react';

import { ICharacter } from '../types';


type IFavoritesContext = {
    favorites: ICharacter[],
    isFavorite: (character: ICharacter) => boolean,
    toggleFavorite: (character: ICharacter) => void,
};
type ProviderProps = { children: ReactNode };

export const FavoritesContext = createContext<IFavoritesContext>({
    favorites: [],
    isFavorite: _ => false,
    toggleFavorite: _ => null,
});

export const FavoritesProvider = ({ children }: ProviderProps) => {
    const [favorites, setFavorites] = useState<ICharacter[]>([]);

    const isFavorite = (character: ICharacter) => {
        return !!favorites.find(favorite => favorite.name === character.name);
    };

    const toggleFavorite = (character: ICharacter) => {
        const isFav = isFavorite(character);

        if (isFav) {
            setFavorites(prevFavorites => prevFavorites.filter(favorite => favorite.name !== character.name));
        } else {
            setFavorites(prevFavorites => [...prevFavorites, character]);
        }
    };

    return (
        <FavoritesContext.Provider
            value={{ favorites, isFavorite, toggleFavorite }}
        >
            {children}
        </FavoritesContext.Provider>
    )
};
