// files
import SearchInput from "./SearchInput";
import ThemeIcon from "./ThemeIcon";
import Title from "./Title";

export default function Navbar() {
  return (
    <nav className=" w-full px-8 bg-red-300">
      <ul className="flex flex-row justify-between bg-amber-200 items-center py-6">
        <Title />
        <SearchInput />
        <ThemeIcon />
      </ul>
    </nav>
  );
}
