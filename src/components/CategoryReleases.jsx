import { Link } from "react-router-dom";
import { HiStar } from "react-icons/hi";
import { DiCodeigniter } from "react-icons/di";
import { BsSkipForwardFill } from "react-icons/bs";

import data from "../data/categories.json";

export default function CategoryReleases() {
  const icons = [HiStar, DiCodeigniter, BsSkipForwardFill];
  return (
    <ul>
      {data.map((link, idx) => {
        const Icon = icons[idx];
        return (
          <Link
            to={`/releases/${link.slug}`}
            className="text-lg font-semibold flex flex-row items-center mb-1"
            key={link.id}
            state={link.name}
          >
            <div className="bg-blue-500 p-2 rounded-lg mr-2">
              <Icon />
            </div>
            {link.title}
          </Link>
        );
      })}
    </ul>
  );
}
