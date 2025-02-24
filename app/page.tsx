import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MovieCarousel from "@/components/MovieCarousel";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/getMovies";

export default async function Home() {
  const UpcomingMovies = await getUpcomingMovies();
  const TopRatedMovies = await getTopRatedMovies();
  const PopularMovies = await getPopularMovies();
  return (
    <main>
      <CarouselBannerWrapper />

      <div className="flex flex-col space-y-2 xl:-mt-48 pb-10">
        <MovieCarousel movies={UpcomingMovies} title={"Upcoming"} />
        <MovieCarousel movies={TopRatedMovies} title={"Top Rated"} />
        <MovieCarousel movies={PopularMovies} title={"Popular"} />
      </div>
    </main>
  );
}
