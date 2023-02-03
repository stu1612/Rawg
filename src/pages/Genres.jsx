import { useParams, useLocation } from "react-router-dom";

import { useGenreQuery } from "../features/games/gamesSlice";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import { motion } from "framer-motion";
import GameCard from "../components/GameCard";
import CardsLayout from "../components/CardsLayout";
import Heading from "../components/Heading";
import { slugToString } from "../utils/slugToString";

export default function Genres() {
  // properties
  const params = useParams();
  const location = useLocation();

  const { id } = location.state;
  const { slug } = params;

  const pageTitle = slugToString(slug);

  const {
    data: games,
    isLoading,
    isFetching,
    isError,
    error,
  } = useGenreQuery(id);

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
