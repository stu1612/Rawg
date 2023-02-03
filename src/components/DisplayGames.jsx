// npm
import { motion } from "framer-motion";

// files
import Heading from "./Heading";
import CardsLayout from "./CardsLayout";
import GameCard from "./GameCard";

// utils
import { slugToString } from "../utils/slugToString";

export default function DisplayGames({ games, slug }) {
  // properties
  const pageTitle = slugToString(slug);

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
