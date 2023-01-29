import { Link } from "react-router-dom";
import { HiStar } from "react-icons/hi";
import { DiCodeigniter } from "react-icons/di";
import { BsSkipForwardFill } from "react-icons/bs";
import { BsFillTrophyFill } from "react-icons/bs";
import { RiBarChartFill } from "react-icons/ri";
import { SiStarship } from "react-icons/si";
import CategoryReleases from "./CategoryReleases";

export default function Sidebar() {
  return (
    <nav className="background text hidden md:block max-w-full w-[300px] h-full px-8  ">
      <ul className="flex flex-col mt-16">
        <Link to={"/"} className="text-xl font-bold py-2">
          Home
        </Link>
        <h2 className="text-xl font-bold py-2">New Releases</h2>
        {/* release 1 */}

        <CategoryReleases />

        {/* <Link
          to={"/releases/last-30-days"}
          className="text-lg font-semibold flex flex-row items-center mb-1"
        >
          <div className="bg-blue-500 p-2 rounded-lg mr-2">
            <HiStar />
          </div>
          Last 30 days
        </Link>

        <Link
          to={"/releases/this-week"}
          className="text-lg font-semibold flex flex-row items-center mb-1"
        >
          <div className="bg-blue-500 p-2 rounded-lg mr-2">
            <DiCodeigniter />
          </div>
          This week
        </Link>

        <Link
          to={"/releases/next-week"}
          className="text-lg font-semibold flex flex-row items-center mb-1"
        >
          <div className="bg-blue-500 p-2 rounded-lg mr-2">
            <BsSkipForwardFill />
          </div>
          Next week
        </Link> */}

        <h2 className="text-xl font-bold py-2">Top</h2>
        <Link
          to={"/"}
          className="text-lg font-semibold flex flex-row items-center mb-1"
        >
          <div className="bg-blue-500 p-2 rounded-lg mr-2">
            <BsFillTrophyFill />
          </div>
          Best of the year
        </Link>
        <Link
          to={"/"}
          className="text-lg font-semibold flex flex-row items-center mb-1"
        >
          <div className="bg-blue-500 p-2 rounded-lg mr-2">
            <RiBarChartFill />
          </div>
          Popular in 2022
        </Link>
        <Link
          to={"/"}
          className="text-lg font-semibold flex flex-row items-center mb-1"
        >
          <div className="bg-blue-500 p-2 rounded-lg mr-2">
            <SiStarship />
          </div>
          All Stars
        </Link>
        <h2 className="text-xl font-bold py-2">Platforms</h2>

        <Link
          to={"/"}
          className="text-lg font-semibold flex flex-row items-center mb-1"
        >
          PC
        </Link>
        <Link
          to={"/"}
          className="text-lg font-semibold flex flex-row items-center mb-1"
        >
          PlayStation
        </Link>
        <Link
          to={"/"}
          className="text-lg font-semibold flex flex-row items-center mb-1"
        >
          XBox One
        </Link>

        <h2 className="text-xl font-bold py-2">Genres</h2>

        <Link
          to={"/"}
          className="text-lg font-semibold flex flex-row items-center mb-1"
        >
          Action
        </Link>
        <Link
          to={"/"}
          className="text-lg font-semibold flex flex-row items-center mb-1"
        >
          Strategy
        </Link>
        <Link
          to={"/"}
          className="text-lg font-semibold flex flex-row items-center mb-1"
        >
          RPG
        </Link>
      </ul>
    </nav>
  );
}
