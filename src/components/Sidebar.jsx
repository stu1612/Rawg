import { Link } from "react-router-dom";
import { HiStar } from "react-icons/hi";
import { DiCodeigniter } from "react-icons/di";
import { BsSkipForwardFill } from "react-icons/bs";
import { BsFillTrophyFill } from "react-icons/bs";
import { RiBarChartFill } from "react-icons/ri";
import { SiStarship } from "react-icons/si";

export default function Sidebar() {
  return (
    <nav className="bg-red-500 hidden md:block max-w-full w-[300px] h-full px-8  ">
      <ul className="flex flex-col mt-16">
        <Link to={"/"} className="text-xl font-bold py-2">
          Home
        </Link>
        <h2 className="text-xl font-bold py-2">New Releases</h2>

        <Link
          to={"/releases"}
          className="text-lg font-semibold flex flex-row items-center mb-1"
        >
          <div className="bg-blue-500 p-2 rounded-lg mr-2">
            <HiStar />
          </div>
          Last 30 days
        </Link>
        <Link
          to={"/releases"}
          className="text-lg font-semibold flex flex-row items-center mb-1"
        >
          <div className="bg-blue-500 p-2 rounded-lg mr-2">
            <DiCodeigniter />
          </div>
          This week
        </Link>
        <Link
          to={"/releases"}
          className="text-lg font-semibold flex flex-row items-center mb-1"
        >
          <div className="bg-blue-500 p-2 rounded-lg mr-2">
            <BsSkipForwardFill />
          </div>
          Next week
        </Link>
        <h2 className="text-xl font-bold py-2">Top</h2>

        <Link
          to={"/releases"}
          className="text-lg font-semibold flex flex-row items-center mb-1"
        >
          <div className="bg-blue-500 p-2 rounded-lg mr-2">
            <BsFillTrophyFill />
          </div>
          Best of the year
        </Link>
        <Link
          to={"/releases"}
          className="text-lg font-semibold flex flex-row items-center mb-1"
        >
          <div className="bg-blue-500 p-2 rounded-lg mr-2">
            <RiBarChartFill />
          </div>
          Popular in 2022
        </Link>
        <Link
          to={"/releases"}
          className="text-lg font-semibold flex flex-row items-center mb-1"
        >
          <div className="bg-blue-500 p-2 rounded-lg mr-2">
            <SiStarship />
          </div>
          All Stars
        </Link>
        <h2 className="text-xl font-bold py-2">Platforms</h2>

        <Link
          to={"/releases"}
          className="text-lg font-semibold flex flex-row items-center mb-1"
        >
          PC
        </Link>
        <Link
          to={"/releases"}
          className="text-lg font-semibold flex flex-row items-center mb-1"
        >
          PlayStation
        </Link>
        <Link
          to={"/releases"}
          className="text-lg font-semibold flex flex-row items-center mb-1"
        >
          XBox One
        </Link>

        <h2 className="text-xl font-bold py-2">Genres</h2>

        <Link
          to={"/releases"}
          className="text-lg font-semibold flex flex-row items-center mb-1"
        >
          Action
        </Link>
        <Link
          to={"/releases"}
          className="text-lg font-semibold flex flex-row items-center mb-1"
        >
          Strategy
        </Link>
        <Link
          to={"/releases"}
          className="text-lg font-semibold flex flex-row items-center mb-1"
        >
          RPG
        </Link>
      </ul>
    </nav>
  );
}
