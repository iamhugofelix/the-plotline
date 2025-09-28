
import HorizontalGrid from "../UI/Grids/HorizontalGrid";
import { useEffect, useState } from "react";
import ItemCard from "../UI/Cards/ItemCard";
import { fetchPopularTv } from "@/services/tvFetchFunctions/fetchPopularTv";

export default function PopularTv () {
  const [popularTv, setPopularTv] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load popular tv
  useEffect(() => {
    const loadPopularTv = async () => {
      try {
        const data = await fetchPopularTv();
        setPopularTv(data);
      } finally {
        setIsLoading(false);
      }
    };

    loadPopularTv();

  }, []);

  {
    isLoading && <p>Loading...</p>;
  }

  return (
    <HorizontalGrid title={"Popular Tv"}>
      {popularTv.map((tv) => {
        return (
            <ItemCard
                key={tv.id}
                type={'tv-series'}
                id={tv.id}
                cardPoster={tv.poster_path}
                cardTitle={tv.name}
            />
        )
      })}
    </HorizontalGrid>
  );
}