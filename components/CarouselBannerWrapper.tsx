import { getDiscoverMovies } from "@/lib/getMovies";
import CarouselBanner from "./CarouselBanner";

async function CarouselBannerWrapper({
  id,
  keywords,
}: {
  id?: string;
  keywords?: string;
}) {
  const movies = await getDiscoverMovies(id, keywords);
   
  return <CarouselBanner movies={movies} />;
}
export default CarouselBannerWrapper;
