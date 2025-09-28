import { fetchTrendingMovies } from "@/services/moviesFetchFunctions/fetchTrendingMovies";
import ItemCard from "../UI/Cards/ItemCard";
import { useEffect, useState } from "react";
import HorizontalGrid from "../UI/Grids/HorizontalGrid";

export default function TrendingMovies() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load trending movies
  useEffect(() => {
    const loadTrendingMovies = async () => {
      try {
        const data = await fetchTrendingMovies();
        setTrendingMovies(data);
      } finally {
        setIsLoading(false);
      }
    };

    loadTrendingMovies();
  }, []);

  {
    isLoading && <p>Loading...</p>;
  }

  return (
    <HorizontalGrid title={"Trending Movies"}>
      {trendingMovies.map((movie) => {
        return (
          <ItemCard
            key={movie.id}
            type={"movie"}
            id={movie.id}
            cardPoster={movie.poster_path}
            cardTitle={movie.title}
          />
        );
      })}
    </HorizontalGrid>
  );
}
