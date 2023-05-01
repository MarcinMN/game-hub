import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

/* Platform type with attributes for id, name, and slug. */
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

/* Game type with attributes for id, name, background_image, 
parent_platforms, metacritic, and rating_top. */
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

/* GameQuery object sent from GameGrid. useData is called to make 
an API call using the endpoint '/games' and any relevant parameters. 
The params are additional search criteria that can be added to the
API call. Some can be null since they are based on the genre and
platform selections (if there are none, then these would be null).
The array at the end with gameQuery in it is there so that the code
will execute whenever gameQuery is updated (e.g. if you choose a 
different genre to filter, etc).  */
const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
