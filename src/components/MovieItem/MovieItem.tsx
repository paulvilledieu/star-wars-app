import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import moment from 'moment';

import { IMovie } from '../../types';

import styles from './MovieItem.style';


export const MovieItem = ({ movie, onPress }: Props) => (
    <TouchableOpacity
        onPress={() => onPress(movie.episodeID, movie.title)}
        style={styles.container}
    >
        <Text style={styles.title}>
            {movie.title}
        </Text>
        <Text style={styles.releaseDate}>
            ({moment(movie.releaseDate).format('MMMM Do YYYY')})
        </Text>
        <Text style={styles.openingCrawl}>
            {movie.openingCrawl
                .substring(0, 50)
                .replace('\r\n', ' ')
            }...
        </Text>
    </TouchableOpacity>
);

type Props = {
    movie: IMovie,
    onPress: (id: number, title: string) => void,
};

export default MovieItem;
