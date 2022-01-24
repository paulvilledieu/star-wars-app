import { gql } from '@apollo/client';

export const moviesQuery = gql`
    query movies {
        allFilms  {
            films {
            episodeID
            releaseDate
            title
            openingCrawl
            speciesConnection{
                totalCount
            }
            planetConnection {
                totalCount
            }
            vehicleConnection {
                totalCount
            }
            characterConnection {
                characters {
                name
                birthYear
                height
                mass
                filmConnection {
                    films {
                    episodeID
                    title
                    }
                }
                homeworld {
                    name
                }
                }
            }
            }
        }
    }
`;