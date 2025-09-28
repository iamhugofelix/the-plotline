import { fetchPopularMovies } from "@/services/moviesFetchFunctions/fetchPopularMovies";
import HorizontalGrid from "../UI/Grids/HorizontalGrid";
import { useEffect, useState } from "react";
import ItemCard from "../UI/Cards/ItemCard";
import Loading from "../UI/Loading/Loading";

export default function PopularMovies () {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load popular movies
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const data = await fetchPopularMovies();
        setPopularMovies(data);
      } finally {
        setIsLoading(false);
      }
    };

    loadPopularMovies();

  }, []);

  {
    isLoading && <Loading />;
  }

  return (
    <HorizontalGrid title={"Popular Movies"}>
      {popularMovies.slice(1).map((movie) => {
        return (
            <ItemCard
                key={movie.id}
                type={'movie'}
                id={movie.id}
                cardPoster={movie.poster_path}
                cardTitle={movie.title}
            />
        )
      })}
    </HorizontalGrid>
  );
}