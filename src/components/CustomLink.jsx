// npm
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CustomLink({ data, icons }) {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <ul>
      {data.map((link, idx) => {
        const Icon = icons[idx];
        return (
          <Link
            to={`/${link.route}/${link.slug}`}
            className="text-lg font-semibold flex flex-row items-center mb-2"
            key={link.id}
            state={link}
          >
            <div className="bg-black dark:bg-white p-2 rounded-xl mr-2">
              <Icon color={`${darkMode ? "black" : "white"}`} />
            </div>
            <li className="text-[18px]">{link.title}</li>
          </Link>
        );
      })}
    </ul>
  );
}
