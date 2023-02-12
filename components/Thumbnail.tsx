import { Movie } from "@/typings";
import Image from "next/image";

interface Props {
  movie: Movie;
}

function Thumbnail({ movie }: Props) {
  return (
    <div
      className="relative h-20 min-w-[180px] cursor-pointer transition duration-200
    ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
    >
      <Image alt="movie banner" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} className="rounded-sm object-cover md:rounded" layout="fill" />
    </div>
  );
}

export default Thumbnail;
