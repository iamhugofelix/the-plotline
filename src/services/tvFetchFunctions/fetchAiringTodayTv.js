import { options } from "../utils";

export async function fetchAiringTodayTv() {
    try {
      const result = await fetch(
        `https://api.themoviedb.org/3/tv/airing_today?language=en-US&region=US`,
        options
      );
      const data = await result.json();

      return data.results;
    } catch (error) {
      console.log("Fail loading trending tv", error);
      return null;
    }
  
}
