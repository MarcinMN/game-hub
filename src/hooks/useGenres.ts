//import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// Use hook to call genres from API. Uses useData import
// const useGenres = () => useData<Genre>("/genres");

// Static loading of genre data from data folder in project.  Uses genres import
const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
