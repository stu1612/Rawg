// npm
import { useLocation, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Heading from "../components/Heading";
import { slugToString } from "../utils/slugToString";

// files
import { useGameDetailQuery } from "../features/games/gamesSlice";

export default function GameDetail() {
  // properties
  const location = useLocation();
  const params = useParams();
  const { state } = location;
  const { slug } = params;

  const pageTitle = slugToString(slug);

  const { data: game } = useGameDetailQuery(state);

  console.log(game);

  // game - background_image, description, name, rating

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
      <div className="flex mb-4">
        {game?.genres.map((genre) => (
          <small
            key={genre.id}
            className="bg-black dark:bg-[#ff6961] text-white dark:text-black font-semibold py-2 px-3 rounded-2xl mr-2 text-[10px]"
          >
            {genre.name}
          </small>
        ))}
      </div>

      {game && (
        <div className="relative cursor-pointer min-h-screen z-10">
          <img
            src={game.background_image}
            alt="Carousel"
            className="w-full h-screen object-cover"
          />
          <p className="absolute top-10 right-10 text-white z-10 font-thin ">
            rating <span className="font-black text-4xl">{game.rating}</span>
          </p>
          {/* <div className="z-10 text-white absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-2/3 w-[90%]"> */}
          <div className="z-10 mx-auto text-white text-center mt-8 md:mt-0 md:absolute md:bottom-10 md:left-1/2 md:transform md:-translate-x-1/2 w-[90%]">
            <p className="drop-shadow-2xl tracking-wider font-normal">
              {" "}
              {game.description_raw}
            </p>
          </div>

          <div className="hidden md:block absolute z-0 inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]   from-[rgba(71,85,105,0.1)]  via-[rgba(0,0,0,.8)]  to-[rgba(0,0,0,1)] w-full " />
        </div>
      )}
    </motion.div>
  );
}
