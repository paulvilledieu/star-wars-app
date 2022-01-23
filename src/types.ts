export interface IAppearanceMovie {
    episodeID: number;
    title: string,
}

export interface IAppearanceMovies {
    films: IAppearanceMovie[]
}

export interface ICharacter {
    name: string;
    birthYear: string | null,
    height: number | null,
    mass: number | null,
    filmConnection: IAppearanceMovies,
    homeworld: { name: string | null };
}

export interface ICharacters {
    characters: ICharacter[];
}

export interface IMovie {
    episodeID: number;
    releaseDate: string;
    title: string;
    openingCrawl: string;
    speciesConnection: { totalCount: number },
    planetConnection: { totalCount: number },
    vehicleConnection: { totalCount: number },
    characterConnection: ICharacters;
}

export type StackParamList = {
    Home: undefined;
    Movie: { id: number, title: string, };
    Character: { character: ICharacter };
};