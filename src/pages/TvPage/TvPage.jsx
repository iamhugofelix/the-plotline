import ItemCard from "@/components/UI/Cards/ItemCard";
import VerticalGrid from "@/components/UI/Grids/VerticalGrid";
import Loading from "@/components/UI/Loading/Loading";
import { fetchAllTv } from "@/services/tvFetchFunctions/fetchAllTv";
import { useEffect, useState } from "react";

export default function TvPage() {
  const [tv, setTv] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadAllTv() {
      const data = await fetchAllTv(page);
      setTv((prev) => (page === 1 ? data : [...prev, ...data]));
    }
    loadAllTv();
  }, [page]);

  if (!tv) return <Loading />;

  return (
    <>
      <div className="tv-header">
        <h1>All Series</h1>
      </div>
      <div className="tv-grid-wrapper">
        <VerticalGrid>
          {tv.map((tv) => {
            return (
              <ItemCard
                type={"tv-series"}
                key={tv.id}
                id={tv.id}
                cardPoster={tv.poster_path}
                cardTitle={tv.name}
              />
            );
          })}
        </VerticalGrid>
      </div>
      <div className="tv-load-more">
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
