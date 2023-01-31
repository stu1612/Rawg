import { BiNoEntry } from "react-icons/bi";
import { HiThumbUp } from "react-icons/hi";
import { BsTrophyFill } from "react-icons/bs";
import { BsFillEmojiExpressionlessFill } from "react-icons/bs";

export default function getRatings(rating) {
  switch (rating) {
    case "skip":
      return <BiNoEntry color="#DC143C" size={28} />;
    case "exceptional":
      return <BsTrophyFill color="#FFA500" size={28} />;
    case "recommended":
      return <HiThumbUp color="#FFD700" size={28} />;
    case "meh":
      return <BsFillEmojiExpressionlessFill color="#FFD700" size={28} />;
    default:
      return null;
  }
}
