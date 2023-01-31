import skip from "../assets/images/error_2.png";
import meh from "../assets/images/bored_2.png";
import recommended from "../assets/images/thumb_2.png";
import exceptional from "../assets/images/target_2.png";

export default function getRatings(rating) {
  switch (rating) {
    case "skip":
      return (
        <div>
          <img
            src={skip}
            alt="rating icon of skip"
            className="object-cover h-8 w-8"
          />
        </div>
      );
    case "exceptional":
      return (
        <div className="relative bottom-[-5px]">
          <img
            src={exceptional}
            alt="rating icon of exceptional"
            className="object-cover h-12 w-12"
          />
        </div>
      );
    case "recommended":
      return (
        <div className="relative bottom-[2px]">
          <img
            src={recommended}
            alt="rating icon of recommended"
            className="object-cover h-7 w-7"
          />
        </div>
      );
    case "meh":
      return (
        <div>
          <img
            src={meh}
            alt="rating icon of meh"
            className="object-cover h-7 w-7"
          />
        </div>
      );
    default:
      return null;
  }
}

// import { BiNoEntry } from "react-icons/bi";
// import { HiThumbUp } from "react-icons/hi";
// import { BsTrophyFill } from "react-icons/bs";
// import { BsFillEmojiExpressionlessFill } from "react-icons/bs";

// export default function getRatings(rating) {
//   switch (rating) {
//     case "skip":
//       return <BiNoEntry color="#DC143C" size={28} />;
//     case "exceptional":
//       return <BsTrophyFill color="#FFA500" size={28} />;
//     case "recommended":
//       return <HiThumbUp color="#FFD700" size={28} />;
//     case "meh":
//       return <BsFillEmojiExpressionlessFill color="#FFD700" size={28} />;
//     default:
//       return null;
//   }
// }
