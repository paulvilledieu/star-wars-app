import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, Switch, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { StackParamList } from '../../../types';

import MovieItem from '../../../components/MovieItem/MovieItem';
import { MoviesContext } from '../../../contexts/moviesContext';
import { sortStringDate } from '../../../utils';

import styles from './Movies.style';


export const Movies = ({ navigation }: Props) => {
    const { movies, loading } = useContext(MoviesContext);
    const [isAscOrder, setIsAscOrder] = useState(true);

    const sortedMovies = useMemo(() => {
        if (!loading) {
            return movies.slice().sort((a, b) => sortStringDate(a.releaseDate, b.releaseDate, isAscOrder));
        }
        return [];
    }, [isAscOrder, loading]);

    const onMoviePress = (id: number, title: string) => {
        navigation.navigate('Movie', { id, title });
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <View style={styles.screen}>
            <View style={styles.toggleContainer}>
                <Text style={styles.toggleText}>Ascending date</Text>
                <Switch
                    value={isAscOrder}
                    onValueChange={() => setIsAscOrder(prevOrder => !prevOrder)}
                />
            </View>
            <FlatList
                data={sortedMovies}
                keyExtractor={item => `${item.episodeID}`}
                renderItem={({ item }) => <MovieItem movie={item} onPress={onMoviePress} />}
            />
        </View>
    );
};

type Props = NativeStackScreenProps<
  StackParamList,
  'Home'
>;

export default Movies;
