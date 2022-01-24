import React, { createContext, ReactNode, useEffect, useState } from 'react';

import { IMovie } from '../types';


type IMoviesContext = {
    movies: IMovie[],
    setMovies: React.Dispatch<React.SetStateAction<IMovie[]>>,
    loading: boolean,
};
type ProviderProps = { children: ReactNode }

export const MoviesContext = createContext<IMoviesContext>({ movies: [], setMovies: () => null, loading: true });

export const MoviesProvider = ({ children }: ProviderProps) => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!!movies.length) {
            setLoading(false);
        }
    }, [movies]);

    return (
        <MoviesContext.Provider
            value={{ movies, setMovies, loading }}
        >
            {children}
        </MoviesContext.Provider>
    )
};
