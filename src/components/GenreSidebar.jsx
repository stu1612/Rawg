import { useState, useEffect } from "react";
import { useGenresQuery } from "../features/games/gamesSlice";
import { Link } from "react-router-dom";
import ImageSidebarLink from "./ImageSidebarLink";

export default function GenreSidebar() {
  const [updatedArr, setUpdatedArr] = useState([]);

  const {
    data: games,
    isLoading,
    isFetching,
    isError,
    error,
  } = useGenresQuery();

  useEffect(() => {
    const desiredIds = [4, 3, 5, 2, 1, 15, 6];
    setUpdatedArr(
      games?.results.filter((item) => desiredIds.includes(item.id))
    );
  }, [games]);

  return (
    <ImageSidebarLink updatedArr={updatedArr} route={"genres"} />
    // <ul>
    //   {updatedArr?.map((item) => (
    //     <Link
    //       to={`/platforms/${item.slug}`}
    //       className="text-lg font-semibold flex flex-row items-center mb-1"
    //       key={item.id}
    //       state={item}
    //     >
    //       <div className="rounded-lg mr-2">
    //         <img
    //           src={item.image_background}
    //           alt={item.name}
    //           className="h-9 w-9 object-cover rounded-lg "
    //         />
    //       </div>
    //       {item.name}
    //     </Link>
    //   ))}
    // </ul>
  );
}
