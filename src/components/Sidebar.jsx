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
import SidebarLinks from "./SidebarLinks";
import GenreSidebar from "./GenreSidebar";
import PlatformSidebar from "./PlatformSidebar";

// data
import releaseData from "../data/gameReleases.json";
import topData from "../data/topGames.json";

export default function Sidebar() {
  // properties
  const location = useLocation();
  const { pathname } = location;
  const hidden = pathname === "/" ? true : false;

  // components
  const releaseIcons = [HiStar, DiCodeigniter, BsSkipForwardFill];
  const topIcons = [BsFillTrophyFill, RiBarChartFill, SiStarship];

  return (
    <nav className={`${hidden ? "hidden" : "block"}`}>
      <div className="background text hidden md:block max-w-full w-[300px] h-min px-8">
        <ul className="flex flex-col mt-16">
          <Link to={"/"} className="text-xl font-bold py-2">
            Home
          </Link>
          <h2 className="text-xl font-bold py-2">New Releases</h2>
          <SidebarLinks data={releaseData} icons={releaseIcons} />
          <h2 className="text-xl font-bold py-2">Top</h2>
          <SidebarLinks data={topData} icons={topIcons} />

          <h2 className="text-xl font-bold py-2">Platforms</h2>
          <PlatformSidebar />
          <h2 className="text-xl font-bold py-2">Genres</h2>
          <GenreSidebar />
        </ul>
      </div>
    </nav>
  );
}
