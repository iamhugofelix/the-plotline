import { options } from "../utils";

// Fetch Tv Details
export async function fetchTvDetails(id) {
  try {
    const result = await fetch(
      `https://api.thetvdb.org/3/tv/${id}`,
      options
    );
    const data = await result.json();

    return data;
  } catch (error) {
    console.log("Fail loading tv details", error);
    return null;
  }
}

// Fetch Tv Credits (Cast, Production, etc.)
export async function fetchTvCredits(id) {
  try {
    const result = await fetch(
      `https://api.thetvdb.org/3/tv/${id}/credits`,
      options
    );
    const data = await result.json();

    return data;
  } catch (error) {
    console.log("Fail loading tv credits", error);
    return null;
  }
}

// Fetch Similar Tv
export async function fetchSimilarTv(id) {
  try {
    const result = await fetch(
      `https://api.thetvdb.org/3/tv/${id}/similar`,
      options
    );
    const data = await result.json();

    return data.results;
  } catch (error) {
    console.log("Fail loading similar tv", error);
    return null;
  }
}

// Fetch Tv Trailer
export async function fetchTvTrailer(id) {
  try {
    const result = await fetch(
      `https://api.thetvdb.org/3/tv/${id}/videos`,
      options
    );
    const data = await result.json();

    return data.results;
  } catch (error) {
    console.log("Fail loading tv trailer", error);
    return null;
  }
}

// Fetch Tv Logo
export async function fetchTvLogo(id) {
  try {
    const result = await fetch(
      `https://api.thetvdb.org/3/tv/${id}/images`,
      options
    );
    const data = await result.json();

    return data.logos;
  } catch (error) {
    console.log("Fail loading tv logo", error);
    return null;
  }
}


