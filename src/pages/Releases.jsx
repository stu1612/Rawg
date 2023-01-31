// npm
import { useParams, useLocation } from "react-router-dom";

// files
import { lastMonth, thisWeek, nextWeek } from "../lib/api";
import { slugToString } from "../utils/slugToString";
import { useUpComingGamesQuery } from "../features/games/gamesSlice";
import GameCard from "../components/GameCard";
import Heading from "../components/Heading";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import CardsLayout from "../components/CardsLayout";

export default function Releases() {
  // properties
  const params = useParams();
  const location = useLocation();

  const { state } = location;
  const { slug } = params;

  const pageTitle = slugToString(slug);

  // methods
  function selection() {
    if (state === "lastMonth") {
      return lastMonth;
    } else if (state === "thisWeek") {
      return thisWeek;
    } else {
      return nextWeek;
    }
  }

  const {
    data: games,
    isLoading,
    isFetching,
    isError,
    error,
  } = useUpComingGamesQuery(selection());

  // safety
  if (isLoading || isFetching) return <LoadingSpinner />;
  if (isError || error) return <ErrorMessage />;

  return (
    <div>
      <Heading title={pageTitle} />
      <CardsLayout>
        {games?.results.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </CardsLayout>
    </div>
  );
}
