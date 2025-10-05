import { options } from "../utils";

export async function fetchAllMovies(page = 1, genre) {
  try {
    const result = await fetch(
      `https://api.themoviedb.org/3/discover/movie?
      language=en-US
      &page=${page}
      &include_adult=false
      &sort_by=popularity.desc
      &vote_count.gte=200
      ${genre ? `&with_genres=${genre.id}` : ""}`,
      options
    );

    const data = await result.json();

    return data.results;
  } catch (error) {
    console.log("Fail loading movies", error);
    return [];
  }
}
