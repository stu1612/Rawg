// npm
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function SearchInput() {
  // local state
  const [query, setQuery] = useState("");

  // method
  const submitHandler = () => {};

  // properties
  const location = useLocation();
  const { pathname } = location;

  const hidden = pathname === "/" ? true : false;

  return (
    <form
      onSubmit={submitHandler}
      className={`${hidden ? "hidden" : "block"} w-2/4`}
    >
      <input
        type="search"
        name=""
        id=""
        className="w-full rounded-full py-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
