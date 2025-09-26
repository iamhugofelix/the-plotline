import PopularMovies from "@/components/MovieComponents/PopularMovies";
import TrendingMovies from "@/components/MovieComponents/TrendingMovies";
import AiringTodayTv from "@/components/TvComponents/AiringTodayTv";
import PopularTv from "@/components/TvComponents/PopularTv";
import HeroSection from "@/components/UI/HeroSection/HeroSection";


export default function Homepage () {
  return (
    <>
      <HeroSection />
      <PopularMovies />
      <TrendingMovies />
      <PopularTv />
      <AiringTodayTv />
    </>
  );
}
