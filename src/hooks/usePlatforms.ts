import useData from "./useData";

/* Platform type with attributes for id, name, and slug. */
interface Platform {
  id: number;
  name: string;
  slug: string;
}

/* useData is used to make an API call using the endpoint '/platforms/lists/parents'. 
Unlike useGames, there are no params here since we aren't using a gameQuery which
could have additional parameters. */
const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
