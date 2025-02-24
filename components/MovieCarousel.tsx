import { Movie } from "@/typing";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";

function MovieCarousel({
  movies,
  title,
  isVerticle,
}: {
  movies: Movie[];
  title?: string;
  isVerticle?: boolean;
}) {
  return (
    <div className="z-50">
      <h2 className="text-xl font-bold px-10 py-2">{title}</h2>
      <div
        className={cn(
          "flex space-x-5 overflow-auto px-5 lg:px-10 py-5",
          `[&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500`,
          isVerticle && "flex-col space-x-0 space-y-12"
        )}
      >
        {isVerticle
          ? movies.map((movie) => (
              <div
                key={movie.id}
                className={cn(
                  isVerticle &&
                    "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5"
                )}
              >
                <MovieCard movie={movie} />
                <div className="max-w-2xl">
                  <p className="font-bold">
                    {movie.title} ({movie.release_date?.split("-")[0]})
                  </p>
                  <hr className="mb-3" />
                  <p>{movie.overview}</p>
                </div>
              </div>
            ))
          : movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}
export default MovieCarousel;
