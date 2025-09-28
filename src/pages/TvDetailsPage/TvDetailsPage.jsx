import CastCard from "@/components/UI/Cards/castCard"
import ItemCard from "@/components/UI/Cards/ItemCard"
import HorizontalGrid from "@/components/UI/Grids/HorizontalGrid"
import Loading from "@/components/UI/Loading/Loading"
import Pill from "@/components/UI/Pills/Pills"
import StarRating from "@/components/UI/StarRating/StarRating"
import { fetchSimilarTv, fetchTvCredits, fetchTvDetails, fetchTvLogo, fetchTvTrailer } from "@/services/tvFetchFunctions/fetchTvDetails"
import { ArrowUpRight, Check } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"


export default function TvDetailsPage() {
  const {id} = useParams()
  const [tv, setTv] = useState(null)
  const [tvCredits, setTvCredits] = useState(null)
  const [tvTrailer, setTvTrailer] = useState(null)
  const [tvLogo, setTvLogo] = useState(null)
  const [tvSimilar, setTvSimilar] = useState(null);

  useEffect(() => {
    async function loadTvDetails() {
      const data = await fetchTvDetails(id)
      setTv(data)
    }
    loadTvDetails()

    async function loadTvCredits() {
      const data = await fetchTvCredits(id)
      setTvCredits(data)
    }
    loadTvCredits()

    async function loadTvTrailer() {
      const data = await fetchTvTrailer(id);
      setTvTrailer(data[0]);
    }
    loadTvTrailer();

    async function loadTvLogo() {
      const data = await fetchTvLogo(id);
      setTvLogo(data);
    }
    loadTvLogo()

    async function loadTvSimilar() {
      const data = await fetchSimilarTv(id);
      setTvSimilar(data);
    }
    loadTvSimilar();

  }, [id])

  console.log('Tv: ', tv);
  console.log("Tv Credits: ", tvCredits);
  console.log("Tv Trailer: ", tvTrailer);
  console.log("Tv Logo: ", tvLogo);
  console.log("Similar Tvs: ", tvSimilar);

  
  if (!tv) return <Loading />;

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

  return (
    <>
      <div
        className="tv-page-hero"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${tv.backdrop_path})`,
        }}
      >
        <div className="tv-page-hero-wrapper">
          {tvLogo && (
            <img
              src={`https://image.tmdb.org/t/p/original/${tvLogo.file_path}`}
              alt={`${tv.title} Logo`}
            />
          )}

          <h1>{tv.name}</h1>
          <p className="h5 regular">{tv.overview}</p>
        </div>
      </div>

      <div className="tv-page-body">
        <div className="body-left">
          <div className="tv-details">
            <h3>Tv Details</h3>

            <span id="rating">
              Rating: <StarRating rating={tv.vote_average} />
            </span>

            <span id="status">
              Status: <p className="link">{tv.status}</p>
            </span>

            <span id="release-date">
              First Aired:{" "}
              <span className="link">{formatDate(tv.first_air_date)}</span>
            </span>

            {tv.last_air_date && 
                <span id="release-date">
                  Last Aired:{" "}
                  <span className="link">{formatDate(tv.last_air_date)}</span>
                </span>
            }

            <span id="seasons">
              Seasons:{" "}
              <span className="link">{`${tv.number_of_seasons} Seasons (${tv.number_of_episodes} Episodes)`}</span>
            </span>

            {tv.homepage && (
              <span id="website">
                Official website:{" "}
                <Link
                  className="link"
                  to={tv.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to website <ArrowUpRight size={16} />{" "}
                </Link>
              </span>
            )}


          </div>

          {tvCredits && (
            <div className="tv-cast">
              <h3>Tv Cast</h3>
              <div className="cast-grid">
                {tvCredits.cast.slice(0, 12).map((person) => {
                  return (
                    <CastCard
                      castPhoto={person.profile_path}
                      castRole={person.character}
                      castName={person.name}
                    />
                  );
                })}
              </div>
            </div>
          )}

          {tvTrailer && (
            <div className="tv-trailer">
              <h3>Series {tvTrailer.type}</h3>
              <iframe
                src={`https://www.youtube.com/embed/${tvTrailer.key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
        </div>

        <div className="body-right">
          <div className="tv-genres">
            <h3>Genres</h3>
            <div className="genres">
              {tv.genres.map((genre) => (
                <Pill type="transparent" size="md" key={genre.id}>
                  {genre.name}
                </Pill>
              ))}
            </div>
          </div>
          <div className="tv-poster">
            <h3>Official Poster</h3>
            <img
              src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
              alt={`${tv.title} Poster`}
              className="card-poster"
            />
          </div>
        </div>
      </div>

      {tvSimilar && (
        <div className="tv-page-similar">
          <HorizontalGrid title={"Similar Series"}>
            {tvSimilar.map((tv) => {
              return (
                <ItemCard
                  type={"tv-series"}
                  key={tv.id}
                  id={tv.id}
                  cardPoster={tv.poster_path}
                  cardTitle={tv.title}
                />
              );
            })}
          </HorizontalGrid>
        </div>
      )}
    </>
  );  
}
