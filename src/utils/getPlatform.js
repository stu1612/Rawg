import { FaPlaystation } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { FaXbox } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { FaWindows } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";

export default function getPlatform(platform) {
  switch (platform) {
    case "PC":
      return <FaWindows />;
    case "PlayStation":
      return <FaPlaystation />;
    case "Xbox":
      return <FaXbox />;
    case "Nintendo":
      return <SiNintendoswitch />;
    case "iOS":
      return <FaApple />;
    case "Android":
      return <DiAndroid />;
    case "Linux":
      return <FaLinux />;
    case "Apple Macintosh":
      return <FaAppStoreIos />;
    default:
      return null;
  }
}
