import { useState, useEffect } from "react";
import Heading from "../components/Heading";
import LoadingSpinner from "../components/LoadingSpinner";
import { usePopularGamesQuery } from "../features/games/gamesSlice";
import { topFive } from "../lib/api";

export default function Home() {
  const { data, isLoading, isFetching, isError, error } =
    usePopularGamesQuery(topFive);

  const [game, setGame] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const games = data?.results.map((item) => item);
    setGame(games);
  }, [data]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((index + 1) % 5);
    }, 5000);

    return () => clearInterval(timer);
  }, [index]);

  if (isLoading || isFetching) return <LoadingSpinner />;
  if (isError || error) return "Woops.. soemthing went wrong";

  return (
    <div className="h-screen">
      <div>
        <Heading title="Top 5 Games since 2019" />
        <div>
          {game?.[index] && (
            <div className="relative">
              <div className="relative mix-blend-overlay">
                <img
                  src={game[index].background_image}
                  alt="Carousel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden md:block absolute -z-10 inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-400 via-slate-600 to-black w-full" />
              <h2 className="py-4 md:py-0  md:absolute md:top-10 md:left-20 font-black text-black md:text-white text-2xl leading-normal tracking-widest">
                {game[index].name}
              </h2>
              <h3 className="hidden md:block absolute top-20 left-20 font-thin uppercase text-white text-6xl opacity-40 leading-normal tracking-widest">
                {game[index].genres[0].name}
              </h3>

              <div className="mt-8 bg-transparent md:absolute md:bottom-2 grid grid-cols-2 md:grid-cols-4 w-full gap-4">
                {game[index].short_screenshots.slice(1, 5).map((img, idx) => (
                  <img
                    src={img.image}
                    alt="hi"
                    key={idx}
                    className="h-28 w-full object-cover"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
