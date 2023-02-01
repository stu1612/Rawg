import { useParams, useLocation } from "react-router-dom";
import CardsLayout from "../components/CardsLayout";
import GameCard from "../components/GameCard";
import { usePlatformsQuery } from "../features/games/gamesSlice";
import { slugToString } from "../utils/slugToString";
import Heading from "../components/Heading";
import Sidebar from "../components/Sidebar";

export default function Platforms() {
  // properties
  const params = useParams();
  const location = useLocation();

  const { id } = location.state;
  const { slug } = params;

  console.log(id);

  const pageTitle = slugToString(slug);

  const {
    data: games,
    isLoading,
    isFetching,
    isError,
    error,
  } = usePlatformsQuery(id);

  console.log(games);

  // safety
  if (isLoading || isFetching) return "Loading ..";
  if (isError || error) return "Error";

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
