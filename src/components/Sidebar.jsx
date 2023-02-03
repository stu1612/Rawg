// npm
import { BsFillTrophyFill } from "react-icons/bs";
import { BsSkipForwardFill } from "react-icons/bs";
import { DiCodeigniter } from "react-icons/di";
import { HiStar } from "react-icons/hi";
import { Link } from "react-router-dom";
import { RiBarChartFill } from "react-icons/ri";
import { SiStarship } from "react-icons/si";
import { useLocation } from "react-router-dom";

// files
import { usePlatformsQuery } from "../features/games/gamesSlice";
import { useGenresQuery } from "../features/games/gamesSlice";
import CustomLink from "./CustomLink";
import APILink from "./APILink";

// data
import releaseData from "../data/gameReleases.json";
import topData from "../data/topGames.json";

export default function Sidebar() {
  // properties
  const location = useLocation();
  const { pathname } = location;
  const hidden = pathname === "/" ? true : false;

  return (
    <nav className={`${hidden ? "hidden" : "block"}`}>
      <div className="background text hidden md:block max-w-full w-[300px] h-min px-8">
        <ul className="flex flex-col mt-16">
          <Link to={"/"} className="text-xl font-bold py-2">
            Home
          </Link>
          <CustomLinks />
          <APILinks />
        </ul>
      </div>
    </nav>
  );
}

function CustomLinks() {
  // properties
  const releaseIcons = [HiStar, DiCodeigniter, BsSkipForwardFill];
  const topIcons = [BsFillTrophyFill, RiBarChartFill, SiStarship];

  return (
    <>
      <h2 className="text-xl font-bold py-2">New Releases</h2>
      <CustomLink data={releaseData} icons={releaseIcons} />
      <h2 className="text-xl font-bold py-2">Top</h2>
      <CustomLink data={topData} icons={topIcons} />
    </>
  );
}

function APILinks() {
  // properties

  // these id values are custom selected
  //rawg.io /games/(platforms or genres)
  const platformIDs = [4, 187, 1, 3, 21, 5, 6, 7];
  const genreIDs = [4, 3, 5, 2, 1, 15, 6];
  return (
    <>
      <h2 className="text-xl font-bold py-2">Platforms</h2>
      <APILink
        query={usePlatformsQuery()}
        ids={platformIDs}
        route={"platforms"}
      />
      <h2 className="text-xl font-bold py-2">Genres</h2>
      <APILink query={useGenresQuery()} ids={genreIDs} route={"genres"} />
    </>
  );
}
