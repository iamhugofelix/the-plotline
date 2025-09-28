import CastCard from "@/components/UI/Cards/castCard";
import ItemCard from "@/components/UI/Cards/ItemCard";
import HorizontalGrid from "@/components/UI/Grids/HorizontalGrid";
import Loading from "@/components/UI/Loading/Loading";
import Pill from "@/components/UI/Pills/Pills";
import StarRating from "@/components/UI/StarRating/StarRating";
import { fetchMovieCredits, fetchMovieDetails, fetchMovieLogo, fetchMovieSimilar, fetchMovieTrailer } from "@/services/moviesFetchFunctions/fetchMovieDetails";
import { ArrowUpRight, Check, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

export default function MovieDetailsPage() {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)
  const [movieCredits, setMovieCredits] = useState(null)
  const [movieTrailer, setMovieTrailer] = useState(null)
  const [movieLogo, setMovieLogo] = useState(null)
  const [movieSimilar, setMovieSimilar] = useState(null);

  useEffect(() => {
    async function loadMovieDetails() {
      const data = await fetchMovieDetails(id)
      setMovie(data)
    }
    loadMovieDetails()

    async function loadMovieCredits() {
      const data = await fetchMovieCredits(id)
      setMovieCredits(data)
    }
    loadMovieCredits()

    async function loadMovieTrailer() {
      const data = await fetchMovieTrailer(id);
      setMovieTrailer(data[0]);
    }
    loadMovieTrailer();

    async function loadMovieLogo() {
      const data = await fetchMovieLogo(id);
      setMovieLogo(data);
    }
    loadMovieLogo()

    async function loadMovieSimilar() {
      const data = await fetchMovieSimilar(id);
      setMovieSimilar(data);
    }
    loadMovieSimilar();

  }, [id])

  console.log('Movie: ', movie);
  console.log("Movie Credits: ", movieCredits);
  console.log("Movie Trailer: ", movieTrailer);
  console.log("Movie Logo: ", movieLogo);
  console.log("Similar Movies: ", movieSimilar);

  // ====== I need to solve this later. If any od this returns null, the page breaks ======
  
  if (!movie || !movieCredits) return <Loading />;

  // Format run time in Hours + Min
  function formatRuntime(runtime) {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return `${hours}h ${minutes}m`;
  }

  // Format date to DD Month, YYYY
  function formatDate (date) {
    const fetchedDate = new Date(`${date}T00:00:00Z`)
    const formattedDate = fetchedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
  })
    return formattedDate;
  }

  console.log('movie :', movie);

  return (
    <>
      <div
        className="movie-page-hero"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        }}
      >
        <div className="movie-page-hero-wrapper">
          {movieLogo && (
            <img
              src={`https://image.tmdb.org/t/p/original/${movieLogo.file_path}`}
              alt={`${movie.title} Logo`}
            />
          )}

          <h1>{movie.title}</h1>
          <p className="h5 regular">{movie.overview}</p>
        </div>
      </div>

      <div className="movie-page-body">
        <div className="body-left">
          <div className="movie-details">
            <h3>Movie Details</h3>

            <span id="rating">
              Rating: <StarRating rating={movie.vote_average} />
            </span>

            <span id="status">
              Status:{" "}
              <p>
                {movie.status === "released" ? (
                  <span>{movie.status}</span>
                ) : (
                  <p className="link">
                    <Check size={16} />
                    {movie.status}
                  </p>
                )}
              </p>
            </span>

            {movie.homepage && (
              <span id="website">
                Official website:{" "}
                <Link
                  className="link"
                  to={movie.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to website <ArrowUpRight size={16} />{" "}
                </Link>
              </span>
            )}

            <span id="release-date">
              Release date:{" "}
              <span className="link">{formatDate(movie.release_date)}</span>
            </span>

            <span id="runtime">
              Runtime:{" "}
              <span className="link">{` ${
                movie.runtime
              } Minutes (${formatRuntime(movie.runtime)})`}</span>
            </span>
          </div>

          {movieCredits.cast && (
            <div className="movie-cast">
              <h3>Movie Cast</h3>
              <div className="cast-grid">
                {movieCredits.cast.slice(0, 12).map((person) => {
                  return (
                    <CastCard
                      castPhoto={person.profile_path}
                      castRole={person.character}
                      castName={person.original_name}
                    />
                  );
                })}
              </div>
            </div>
          )}

          {movieTrailer && (
            <div className="movie-trailer">
              <h3>Movie {movieTrailer.type}</h3>
              <iframe
                src={`https://www.youtube.com/embed/${movieTrailer.key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
        </div>

        <div className="body-right">
          <div className="movie-genres">
            <h3>Genres</h3>
            <div className="genres">
              {movie.genres.map((genre) => (
                <Pill type="transparent" size="md" key={genre.id}>
                  {genre.name}
                </Pill>
              ))}
            </div>
          </div>
          <div className="movie-poster">
            <h3>Official Poster</h3>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={`${movie.title} Poster`}
              className="card-poster"
            />
          </div>
        </div>
      </div>

      {movieSimilar && 
        <div className="movie-page-similar">
          <HorizontalGrid title={"Similar Movies"}>
            {movieSimilar.map((movie) => {
              return (
                <ItemCard
                  type={'movie'}
                  key={movie.id}
                  id={movie.id}
                  cardPoster={movie.poster_path}
                  cardTitle={movie.title}
                />
              );
            })}
          </HorizontalGrid>
        </div>
      }
    </>
  );  
}
