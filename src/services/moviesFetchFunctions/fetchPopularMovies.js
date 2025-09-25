import { options } from "../utils";

export async function fetchPopularMovies() {
    try {
        const result = await fetch(
            `https://api.themoviedb.org/3/movie/popular`, options
        );
        const data = await result.json()

        return data.results

        } catch (error) {
            console.log('Fail loading popular movies', error);
            return null;
        }
}