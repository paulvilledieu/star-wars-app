import React, { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import CharacterItem from '../../../components/CharacterItem/CharacterItem';
import { ICharacter, StackParamList } from '../../../types';
import { FavoritesContext } from '../../../contexts/favoritesContext';

import styles from './Favorites.style';


export const Favorites = ({ navigation }: Props) => {
    const { favorites } = useContext(FavoritesContext);

    const onCharacterPress = (character: ICharacter) => {
        navigation.navigate('Character', { character });
    };

    if (!favorites.length) {
        return (
            <View style={styles.noFavoritesContainer}>
                <Text style={styles.noFavoritesText} >Favorites list empty</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={favorites}
            keyExtractor={(_, index) => `${index}`}
            renderItem={({ item }) => <CharacterItem character={item} onPress={() => onCharacterPress(item)} />}
            contentContainerStyle={styles.container}
        />
    );
};

type Props = NativeStackScreenProps<
  StackParamList,
  'Home'
>;

export default Favorites;
