import React, { useContext, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useQuery} from "@apollo/client";

import Movies from './Movies/Movies';
import Favorites from './Favorites/Favorites';

import { moviesQuery } from '../../queries';
import { MoviesContext } from '../../contexts/moviesContext';


const Tab = createBottomTabNavigator();

export const Home = () => {
    const { loading, data } = useQuery(moviesQuery);
    const { setMovies } = useContext(MoviesContext);

    useEffect(() => {
        if (!loading && !!data) {
            setMovies(data.allFilms.films);
        }
    }, [loading, data]);

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    const name = route.name === 'Movies' ? 'movie' : 'favorite';

                    return <MaterialIcons name={name} size={size} color={color} />;
                },
                headerShown: false,
            })}
        >
            <Tab.Screen name="Movies" component={Movies} />
            <Tab.Screen name="Favorites" component={Favorites} />
        </Tab.Navigator>
    );
}

export default Home;
