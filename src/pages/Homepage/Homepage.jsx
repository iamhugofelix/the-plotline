import PopularMovies from "@/components/MovieComponents/PopularMovies";
import ItemCard from "@/components/UI/Cards/ItemCard";
import HeroSection from "@/components/UI/HeroSection/HeroSection";

export default function Homepage () {
  return (
    <>
      <HeroSection />
      <div className="popular-movies">
        <PopularMovies />
      </div>
    </>
  );
}
