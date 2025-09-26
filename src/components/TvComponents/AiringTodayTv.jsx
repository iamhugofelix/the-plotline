
import ItemCard from "../UI/Cards/ItemCard";
import { useEffect, useState } from "react";
import HorizontalGrid from "../UI/Grids/HorizontalGrid";
import { fetchAiringTodayTv } from "@/services/tvFetchFunctions/fetchAiringTodayTv";

export default function AiringTodayTv() {
  const [airingTodayTv, setAiringTodayTv] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load airingToday tv
  useEffect(() => {
    const loadAiringTodayTv = async () => {
      try {
        const data = await fetchAiringTodayTv();
        setAiringTodayTv(data);
      } finally {
        setIsLoading(false);
      }
    };

    loadAiringTodayTv();
  }, []);

  {
    isLoading && <p>Loading...</p>;
  }

  console.log("AiringToday Tv", airingTodayTv);

  return (
    <HorizontalGrid title={"Airing Today"}>
      {airingTodayTv.map((tv) => {
        return (
          <ItemCard
            key={tv.id}
            type={"tv"}
            id={tv.id}
            cardPoster={tv.poster_path}
            cardTitle={tv.name}
          />
        );
      })}
    </HorizontalGrid>
  );
}
