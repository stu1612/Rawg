// npm
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { HiStar } from "react-icons/hi";
import { DiCodeigniter } from "react-icons/di";
import { BsSkipForwardFill } from "react-icons/bs";
import { BsFillTrophyFill } from "react-icons/bs";
import { RiBarChartFill } from "react-icons/ri";
import { SiStarship } from "react-icons/si";

// import { FaPlaystation } from "react-icons/fa";
// import { SiNintendoswitch } from "react-icons/si";
// import { FaXbox } from "react-icons/fa";
// import { FaApple } from "react-icons/fa";
// import { DiAndroid } from "react-icons/di";
// import { FaWindows } from "react-icons/fa";
// import { FaLinux } from "react-icons/fa";
// import { FaAppStoreIos } from "react-icons/fa";

// files
import SidebarLinks from "./SidebarLinks";

// data
import releaseData from "../data/gameReleases.json";
import topData from "../data/topGames.json";
// import platformsData from "../data/platforms.json";
import PlatformSidebar from "./PlatformSidebar";
// import { usePlatformQuery } from "../features/games/gamesSlice";

export default function Sidebar() {
  const location = useLocation();
  const { pathname } = location;

  const hidden = pathname === "/" ? true : false;

  // properties
  const releaseIcons = [HiStar, DiCodeigniter, BsSkipForwardFill];
  const topIcons = [BsFillTrophyFill, RiBarChartFill, SiStarship];
  // const platformIcons_1 = [FaWindows, FaPlaystation, FaXbox, FaApple];
  // const platformIcons_2 = [DiAndroid, FaAppStoreIos, FaLinux, SiNintendoswitch];
  // const platformIcons = [...platformIcons_1, ...platformIcons_2];

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
          {/* <SidebarLinks data={platformsData} icons={platformIcons} /> */}
          <PlatformSidebar />

          <h2 className="text-xl font-bold py-2">Genres</h2>
        </ul>
      </div>
    </nav>
  );
}
