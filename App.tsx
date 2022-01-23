import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";

import Home from './src/screens/Home/Home';
import Movie from './src/screens/Movie/Movie';
import Character from './src/screens/Character/Character';
import { StackParamList } from './src/types';
import FavoriteIcon from './src/components/FavoriteIcon/FavoriteIcon';
import { MoviesProvider } from './src/contexts/moviesContext';
import { FavoritesProvider } from './src/contexts/favoritesContext';

const Stack = createNativeStackNavigator<StackParamList>();

const client = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache()
  });

export default function App() {
    return (
        <ApolloProvider client={client}>
            <MoviesProvider>
                <FavoritesProvider>
                    <NavigationContainer>
                        <Stack.Navigator>
                            <Stack.Screen name="Home" component={Home} />
                            <Stack.Screen
                                name="Movie"
                                component={Movie}
                                options={({ route }) => ({ title: route.params.title })}
                            />
                            <Stack.Screen
                                name="Character"
                                component={Character}
                                options={({ route }) => ({
                                    title: route.params.character.name,
                                    headerRight: () => <FavoriteIcon character={route.params.character} />,
                                })}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </FavoritesProvider>
            </MoviesProvider>
        </ApolloProvider>
  );
}
