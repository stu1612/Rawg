import { Link } from "react-router-dom";

export default function Title() {
  return (
    <Link to={"/"}>
      <h1 className="text-xl tracking-widest font-black">RAWG</h1>
    </Link>
  );
}
