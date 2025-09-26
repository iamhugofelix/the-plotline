import { options } from "../utils";

export async function fetchPopularTv() {
    try {
        const result = await fetch(
            `https://api.themoviedb.org/3/tv/popular`, options
        );
        const data = await result.json()

        return data.results

        } catch (error) {
            console.log('Fail loading popular tv', error);
            return null;
        }
}