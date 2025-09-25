import { options } from "../utils";

// Fetch Movie Details
export async function fetchMovieDetails(id) {
  try {
    const result = await fetch(
      `https://api.themoviedb.org/3/movie/${id}`,
      options
    );
    const data = await result.json();

    return data;
  } catch (error) {
    console.log("Fail loading movie details", error);
    return null;
  }
}

// Fetch Movie Credits (Cast, Production, etc.)
export async function fetchMovieCredits(id) {
  try {
    const result = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits`,
      options
    );
    const data = await result.json();

    return data;
  } catch (error) {
    console.log("Fail loading movie credits", error);
    return null;
  }
}

// Fetch Similar Movies
export async function fetchSimilarMovies(id) {
  try {
    const result = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar`,
      options
    );
    const data = await result.json();

    return data.results;
  } catch (error) {
    console.log("Fail loading similar movies", error);
    return null;
  }
}

// Fetch Movie Trailer
export async function fetchMovieTrailer(id) {
  try {
    const result = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      options
    );
    const data = await result.json();

    return data.results;
  } catch (error) {
    console.log("Fail loading movie trailer", error);
    return null;
  }
}

// Fetch Movie Logo
export async function fetchMovieLogo(id) {
  try {
    const result = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/images`,
      options
    );
    const data = await result.json();

    return data.logos;
  } catch (error) {
    console.log("Fail loading movie logo", error);
    return null;
  }
}


