// npm
import { useParams, useLocation } from "react-router-dom";

// files
import { usePlatformQuery } from "../features/games/gamesSlice";
import DisplayGames from "../components/DisplayGames";
import ErrorMessage from "../components/ErrorMessage";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Platforms() {
  // properties
  const params = useParams();
  const location = useLocation();

  const { id } = location.state;
  const { slug } = params;

  const {
    data: games,
    isLoading,
    isFetching,
    isError,
    error,
  } = usePlatformQuery(id);

  // safety
  if (isLoading || isFetching) return <LoadingSpinner />;
  if (isError || error) return <ErrorMessage />;

  return <DisplayGames games={games} slug={slug} />;
}
