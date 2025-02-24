import MovieCarousel from "@/components/MovieCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";

async function page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ genre: string }>;
}) {
  const genreId = (await params).id;
  const genre = (await searchParams).genre;

  const movies = await getDiscoverMovies(genreId);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {genre}</h1>
        <MovieCarousel title="Genre" movies={movies} isVerticle />
      </div>
    </div>
  );
}
export default page;
