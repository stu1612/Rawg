// files
import EnterSite from "./EnterSite";
import SearchInput from "./SearchInput";
import ThemeIcon from "./ThemeIcon";
import Title from "./Title";

export default function Navbar() {
  return (
    <nav className=" w-full px-8 navbar">
      <ul className="flex flex-row justify-between items-center py-6">
        <Title />
        <SearchInput />
        <EnterSite />
        <ThemeIcon />
      </ul>
    </nav>
  );
}
