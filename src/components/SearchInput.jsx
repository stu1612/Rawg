// npm
import { useState } from "react";

export default function SearchInput() {
  // local state
  const [query, setQuery] = useState("");

  // method
  const submitHandler = () => {};

  return (
    <form onSubmit={submitHandler} className="w-2/4">
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
