import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { IAppearanceMovie } from '../../types';

import styles from './AppearanceMovieItem.style';


export const AppearanceMovieItem = ({ movie: { episodeID, title}, onPress }: Props) => (
    <TouchableOpacity
        onPress={() => onPress(episodeID, title)}
        style={styles.container}
    >
        <Text style={styles.title}>
            {title}
        </Text>
    </TouchableOpacity>
);

type Props = {
    movie: IAppearanceMovie,
    onPress: (id: number, title: string) => void,
};

export default AppearanceMovieItem;
