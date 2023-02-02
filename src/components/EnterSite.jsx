import { IoRocketSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function EnterSite() {
  const location = useLocation();
  const { pathname } = location;

  const hidden = pathname === "/" ? true : false;

  return (
    <Link to="/popular/all-stars" state={{ name: "allStars" }}>
      <motion.button
        type="button"
        className={`${
          hidden ? "block" : "hidden"
        } border-2 border-black dark:border-[#ff6961] dark:text-[#ff6961] hover:text-[#F9F6EE] hover:bg-black dark:hover:bg-[#ff6961] dark:hover:text-[#F9F6EE] border-solid rounded-full p-2 transition duration-200 ease-in-out`}
      >
        <IoRocketSharp size={28} />
      </motion.button>
    </Link>
  );
}
