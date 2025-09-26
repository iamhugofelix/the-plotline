import { fetchTopItemDetails, fetchTopItems, fetchTopItemTrailer } from "@/services/fetchTopItems";
import { useEffect, useState } from "react";
import StarRating from "../StarRating/StarRating";
import Pill from "../Pills/Pills";
import { Link } from "react-router";
import { Play } from "lucide-react";

export default function HeroSection () {
  const [topItem, setTopItem] = useState([]);
  const [topItemDetails, setTopItemDetails] = useState([]);
  const [topItemTrailer, setTopItemTrailer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load top trending movie or tv series
  useEffect(() => {
    const loadTopItem = async () => {
      try {
        const data = await fetchTopItems();
        setTopItem(data.results[0]);
      } finally {
        setIsLoading(false);
      }
    };

    loadTopItem();
  }, []);

  // Load top item details
  useEffect(() => {
    if (!topItem || !["movie", "tv"].includes(topItem.media_type)) return;

    const loadTopItemDetails = async () => {
      try {
        const data = await fetchTopItemDetails(topItem.media_type, topItem.id);
        setTopItemDetails(data);
      } finally {
        setIsLoading(false);
      }
    };

    loadTopItemDetails();
  }, [topItem]);

  // Load top item trailer
  useEffect(() => {
    if (!topItem || !["movie", "tv"].includes(topItem.media_type)) return;

    const loadTopItemTrailer = async () => {
      try {
        const data = await fetchTopItemTrailer(topItem.media_type, topItem.id);
        setTopItemTrailer(data.results[0]);
      } finally {
        setIsLoading(false);
      }
    };

    loadTopItemTrailer();
  }, [topItem]);

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${topItem.backdrop_path})`,
      }}
    >
      <div className="hero-content-wrapper">
        <div className="hero-genres">
          {topItemDetails.genres ? (
            <Pill type="red" size="md">
              Featured
            </Pill>
          ) : (
            ""
          )}
          {topItemDetails.genres?.map((genre) => {
            return (
              <Pill type="transparent" size="md" key={genre.id}>
                {genre.name}
              </Pill>
            );
          })}
        </div>

        <h1>{topItem.title}</h1>
        <p className="h5 regular">{topItem.overview}</p>
        <div className="hero-details">
          <span>{topItem.release_date?.slice(0, 4)}</span>
          <span>&middot;</span>
          <StarRating rating={topItem.vote_average} />
        </div>

        <div className="hero-actions">
          <Link
            className="btn btn-opaque btn--md"
          >
            View Details
          </Link>
          {topItemTrailer.type && (
            <Link
              className="btn btn-opaque btn--md"
              to={`https://www.youtube.com/watch?v=${topItemTrailer.key}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Play size={16} />
              <span>{`Watch ${topItemTrailer.type}`}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}