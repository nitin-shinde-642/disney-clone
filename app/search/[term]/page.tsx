import MovieCarousel from "@/components/MovieCarousel";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";

async function page({ params }: { params: Promise<{ term: string }> }) {
  const slug = decodeURIComponent((await params).term);
  const movies = await getSearchedMovies(slug);
  const popularMovies = await getPopularMovies();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for: {slug}</h1>
        <MovieCarousel title="Search Results" movies={movies} isVerticle />
        <MovieCarousel title="You may also like" movies={popularMovies} />
      </div>
    </div>
  );
}
export default page;
