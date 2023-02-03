// npm
import { useParams, useLocation } from "react-router-dom";

// files
import { bestOfTheYear, popularIn2022, allStars } from "../lib/api";
import { usePopularGamesQuery } from "../features/games/gamesSlice";
import DisplayGames from "../components/DisplayGames";
import ErrorMessage from "../components/ErrorMessage";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Popular() {
  // properties
  const params = useParams();
  const location = useLocation();
  const { name } = location.state;
  const { slug } = params;

  // methods
  function selection() {
    if (name === "bestOfTheYear") {
      return bestOfTheYear;
    } else if (name === "popularIn2022") {
      return popularIn2022;
    } else {
      return allStars;
    }
  }

  const {
    data: games,
    isLoading,
    isFetching,
    isError,
    error,
  } = usePopularGamesQuery(selection());

  // safety
  if (isLoading || isFetching) return <LoadingSpinner />;
  if (isError || error) return <ErrorMessage />;

  return <DisplayGames games={games} slug={slug} />;
}
