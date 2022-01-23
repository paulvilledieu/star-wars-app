import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { ICharacter } from '../../types';

import styles from './CharacterItem.style';


export const CharacterItem = ({ character, onPress }: Props) => (
    <TouchableOpacity
        onPress={() => onPress()}
        style={styles.container}
    >
        <Text style={styles.title}>
            {character.name}
        </Text>
    </TouchableOpacity>
);

type Props = {
    character: ICharacter,
    onPress: () => void,
};

export default CharacterItem;
