import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { ICharacter } from '../../types';
import { FavoritesContext } from '../../contexts/favoritesContext';


export const FavoriteIcon = ({ character }: Props) => {
    const { isFavorite, toggleFavorite } = useContext(FavoritesContext);

    return (
        <TouchableOpacity
            onPress={() => toggleFavorite(character)}
        >
            <MaterialIcons
                name={(isFavorite(character)) ? 'favorite' : 'favorite-border'}
                size={24}
                color="red"
            />
        </TouchableOpacity>
    );
};

type Props = {
    character: ICharacter,
};

export default FavoriteIcon;
