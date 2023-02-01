import { useState, useEffect } from "react";
import { usePlatformQuery } from "../features/games/gamesSlice";
import { Link } from "react-router-dom";

export default function PlatformSidebar() {
  const [updatedArr, setUpdatedArr] = useState([]);

  const {
    data: games,
    isLoading,
    isFetching,
    isError,
    error,
  } = usePlatformQuery();

  useEffect(() => {
    const desiredIds = [4, 187, 1, 3, 21, 5, 6, 7];
    setUpdatedArr(
      games?.results.filter((item) => desiredIds.includes(item.id))
    );
  }, [games]);

  return (
    <ul>
      {updatedArr?.map((item) => (
        <Link
          to={`/platforms/${item.slug}`}
          className="text-lg font-semibold flex flex-row items-center mb-1"
          key={item.id}
          state={item}
        >
          <div className="rounded-lg mr-2">
            <img
              src={item.image_background}
              alt={item.name}
              className="h-9 w-9 object-cover rounded-lg "
            />
          </div>
          {item.name}
        </Link>
      ))}
    </ul>
  );
}
