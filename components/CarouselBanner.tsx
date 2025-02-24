"use client";

import { Movie } from "@/typing";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";

Autoplay.globalOptions = { delay: 8000 };

function CarouselBanner({ movies }: { movies: Movie[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);

  return (
    <div
      ref={emblaRef}
      className="overflow-hidden lg:-mt-40 relative cursor-pointer"
    >
      <div className="flex">
        {movies.map((movie) => (
          <div className="flex-full min-w-0 relative" key={movie.id}>
            <Image
              key={movie.id}
              src={getImagePath(movie.backdrop_path, true)}
              alt={movie.title}
              width={1920}
              height={1080}
            />
            <div className="md:absolute mt-0 top-0 px-2 pt-4 md:pt-40 xl:pt-52 left-0 lg:mt-40 bg-transparent h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent md:p-10 space-y-5 z-20">
              <h2 className="text-lg md:text-5xl font-bold max-w-xl z-50">
                {movie.title}
              </h2>
              <p className="max-w-xl line-clamp-3">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
        <div className="md:absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1a1c29]" />
    </div>
  );
}
export default CarouselBanner;
