import ItemCard from "@/components/UI/Cards/ItemCard";
import VerticalGrid from "@/components/UI/Grids/VerticalGrid";
import Loading from "@/components/UI/Loading/Loading";
import { fetchAllMovies } from "@/services/moviesFetchFunctions/fetchAllMovies";
import { useEffect, useState } from "react";

export default function MoviesPage () {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)


  useEffect(() => {
    async function loadAllMovies() {
      const data = await fetchAllMovies(page);
      setMovies((prev) => (page === 1 ? data : [...prev, ...data]));
    }
    loadAllMovies();
  }, [page])


  if (!movies) return <Loading />;

  return (
    <>
      <div className="movies-header">
        <h1>All Movies</h1>
      </div>
      <div className="movies-grid-wrapper">
        <VerticalGrid>
          {movies.map((movie) => {
            return (
              <ItemCard
                type={'movie'}
                key={movie.id}
                id={movie.id}
                cardPoster={movie.poster_path}
                cardTitle={movie.title}
              />
            )
          })}
        </VerticalGrid>
      </div>
      <div className="movies-load-more">
          <button 
            className="btn btn-opaque btn--md"
            onClick={() => setPage((prev) => prev + 1)}
          >
            Load more
          </button>
      </div>
    </>
  );
}