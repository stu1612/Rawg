import { Link } from "react-router-dom";

export default function ImageSidebarLink({ updatedArr, route }) {
  return (
    <ul>
      {updatedArr?.map((item) => (
        <Link
          to={`/${route}/${item.slug}`}
          className="text-lg font-semibold flex flex-row items-center mb-2"
          key={item.id}
          state={item}
        >
          <div className="rounded-xl mr-2">
            <img
              src={item.image_background}
              alt={item.name}
              className="h-9 w-9 object-cover rounded-xl"
            />
          </div>
          <li className="text-[18px]">{item.name}</li>
        </Link>
      ))}
    </ul>
  );
}
