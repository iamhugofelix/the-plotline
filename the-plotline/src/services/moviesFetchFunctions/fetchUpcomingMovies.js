import { options } from "../utils";

export async function fetchUpcomingMovies() {
  try {
    const result = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming`,
      options
    );
    const data = await result.json();

    return data.results;
  } catch (error) {
    console.log("Fail loading upcoming movies", error);
    return null;
  }
}
