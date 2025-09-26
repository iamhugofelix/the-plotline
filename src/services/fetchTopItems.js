import { options } from "./utils";

export async function fetchTopItems() {
  try {
    const result = await fetch(
      `https://api.themoviedb.org/3/trending/all/week`,
      options
    );
    const data = await result.json();

    return data;
  } catch (error) {
    console.log("Fail loading trending movies and tv series", error);
    return null;
  }
}

export async function fetchTopItemDetails(type, id) {
  try {
    const result = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}`,
      options
    );
    const data = await result.json();

    return data;
  } catch (error) {
    console.log("Fail loading details for movies and tv series", error);
    return null;
  }
}

export async function fetchTopItemTrailer(type, id) {
  try {
    const result = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}/videos`,
      options
    );
    const data = await result.json();

    return data;
  } catch (error) {
    console.log("Fail loading details for movies and tv series", error);
    return null;
  }
}
