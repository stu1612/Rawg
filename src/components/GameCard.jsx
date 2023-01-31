import { useState } from "react";
import getPlatform from "../utils/getPlatform";
import getRatings from "../utils/getRatings";
import { HiOutlineChevronRight } from "react-icons/hi";

export default function GameCard({ game }) {
  // local state
  const [showTooltip, setShowTooltip] = useState(false);
  const [onHover, setOnHover] = useState(false);

  const returnFirstIndexRating =
    game.ratings.length !== 0 && game.ratings[0].title;

  const openTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  const handleHover = () => {
    setOnHover(!onHover);
  };

  const genres = game.genres.map((genre) => (
    <small key={genre.id} className="mr-2 underline underline-offset-4">
      {genre.name}
    </small>
  ));

  return (
    <div
      className="rounded-2xl h-fit overflow-hidden flex flex-col cards cursor-pointer mb-8"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="h-44 ">
        <img
          src={game.background_image}
          alt={game.name}
          className="h-full w-full rounded-t-2xl object-cover"
        />
      </div>
      <div className="pt-4 px-4 pb-8">
        <div className="flex flex-row ">
          {game.parent_platforms?.map((item, idx) => (
            <div className="h-5 w-5 mr-2" key={idx}>
              {getPlatform(item.platform.name)}
            </div>
          ))}
        </div>
        <h1 className="relative w-auto font-bold text-2xl mt-2 pr-4 ">
          {game.name}
          <span
            className="absolute bottom-0 ml-2 "
            onMouseEnter={openTooltip}
            onMouseLeave={openTooltip}
          >
            {getRatings(returnFirstIndexRating)}
            {showTooltip && <Tooltip message={returnFirstIndexRating} />}
          </span>
        </h1>
        {onHover && (
          <div className="flex flex-col w-full">
            <div className="decoration-1 py-4 flex flex-row justify-between border-b-[0.5px] border-text border-zinc-500 border-solid w-full">
              <small className="text-zinc-500">Released Date: </small>
              <small>{game.released}</small>
            </div>

            <div className="decoration-1 py-4 flex flex-row justify-between w-full">
              <small className="text-zinc-500">Genres:</small>
              <div>{genres}</div>
            </div>
            <button className="bg-[#353535] py-3 rounded-md flex flex-row items-center justify-between px-4">
              <p className="text-sm">See Details</p>
              <HiOutlineChevronRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const Tooltip = ({ message }) => {
  return (
    <small className="absolute top-[-30px] right-[-10px] background px-2 text-[12px] ">
      {message}
    </small>
  );
};
