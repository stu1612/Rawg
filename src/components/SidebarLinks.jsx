// npm
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SidebarLinks({ data, icons }) {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <ul>
      {data.map((link, idx) => {
        const Icon = icons[idx];
        return (
          <Link
            to={`/${link.route}/${link.slug}`}
            className="text-lg font-semibold flex flex-row items-center mb-1"
            key={link.id}
            state={link}
          >
            <div className="bg-black dark:bg-white p-2 rounded-lg mr-2">
              <Icon color={`${darkMode ? "black" : "white"}`} />
            </div>
            {link.title}
          </Link>
        );
      })}
    </ul>
  );
}
