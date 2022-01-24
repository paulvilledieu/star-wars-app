import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { StackParamList } from '../../types';
import AppearanceMovieItem from '../../components/AppearanceMovieItem/AppearanceMovieItem';

import styles from './Character.style';


export const Character = ({ route, navigation }: Props) => {
    const { character } = route.params;

    const onMoviePress = (id: number, title: string) => {
        navigation.navigate('Movie', { id, title });
    };

    const renderHeader = () => (
        <View>
            <Text style={styles.headerText}>{`Name: ${character.name}`}</Text>
            <Text style={styles.headerText}>{`Birth year: ${character.birthYear || '?'}`}</Text>
            <Text style={styles.headerText}>{`Height: ${character.height || '?'} cm`}</Text>
            <Text style={styles.headerText}>{`Mass: ${character.mass || '?'} kg`}</Text>
            <Text style={styles.headerText}>{`Home world: ${character.homeworld.name || '?'}`}</Text>
            <Text style={styles.headerText}>Appeared in:</Text>
        </View>
    );
    
    return (
        <FlatList
            data={character.filmConnection.films}
            keyExtractor={item => `${item.episodeID}`}
            renderItem={({ item }) => <AppearanceMovieItem movie={item} onPress={onMoviePress} />}
            ListHeaderComponent={renderHeader}
            contentContainerStyle={styles.container}
        />
    );
};

type Props = NativeStackScreenProps<
  StackParamList,
  'Character'
>;

export default Character;
