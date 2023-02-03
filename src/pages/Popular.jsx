// npm
import { useParams, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

// files
import { bestOfTheYear, popularIn2022, allStars } from "../lib/api";
import { slugToString } from "../utils/slugToString";
import { usePopularGamesQuery } from "../features/games/gamesSlice";
import GameCard from "../components/GameCard";
import Heading from "../components/Heading";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import CardsLayout from "../components/CardsLayout";

export default function Popular() {
  // properties
  const params = useParams();
  const location = useLocation();

  const { name } = location.state;
  const { slug } = params;

  const pageTitle = slugToString(slug);

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

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.2,
        ease: "linear",
      }}
    >
      <Heading title={pageTitle} />
      <CardsLayout>
        {games?.results.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </CardsLayout>
    </motion.div>
  );
}
