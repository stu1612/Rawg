// npm
import { useParams, useLocation } from "react-router-dom";

// files
import { lastMonth, thisWeek, nextWeek } from "../lib/api";
import { useUpComingGamesQuery } from "../features/games/gamesSlice";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import DisplayGames from "../components/DisplayGames";

export default function Releases() {
  // properties
  const params = useParams();
  const location = useLocation();
  const { name } = location.state;
  const { slug } = params;

  // methods
  function selection() {
    if (name === "lastMonth") {
      return lastMonth;
    } else if (name === "thisWeek") {
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

  return <DisplayGames games={games} slug={slug} />;
}
