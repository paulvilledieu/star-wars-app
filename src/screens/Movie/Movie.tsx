import React, { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import moment from 'moment';

import { ICharacter, StackParamList } from '../../types';
import CharacterItem from '../../components/CharacterItem/CharacterItem';
import { MoviesContext } from '../../contexts/moviesContext';

import styles from './Movie.style';


export const Movie = ({ route, navigation }: Props) => {  
    const { movies } = useContext(MoviesContext);  
    const movie = movies.find(movie => movie.episodeID === route.params.id);

    const onCharacterPress = (character: ICharacter) => {
        navigation.navigate('Character', { character });
    };

    if (!movie) return null;

    const renderHeader = () => (
        <View>
            <Text style={styles.headerText}>{`Released: ${moment(movie.releaseDate).format('MMMM Do YYYY')}`}</Text>
            <Text style={styles.headerText}>{`Opening crawl: ${movie.openingCrawl.replace('\r\n', ' ')}`}</Text>
            <Text style={styles.headerText}>{`Species count: ${movie.speciesConnection.totalCount}`}</Text>
            <Text style={styles.headerText}>{`Planet count: ${movie.planetConnection.totalCount}`}</Text>
            <Text style={styles.headerText}>{`Vehicle count: ${movie.vehicleConnection.totalCount}`}</Text>
            <Text style={styles.headerText}>Characters:</Text>
        </View>
    );
    
    return (
        <FlatList
            data={movie.characterConnection.characters}
            keyExtractor={(_, index) => `${index}`}
            renderItem={({ item }) => <CharacterItem character={item} onPress={() => onCharacterPress(item)} />}
            ListHeaderComponent={renderHeader}
            contentContainerStyle={styles.container}
        />
    );
};

type Props = NativeStackScreenProps<
  StackParamList,
  'Movie'
>;

export default Movie;
