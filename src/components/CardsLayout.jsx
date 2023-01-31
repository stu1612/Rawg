// npm
import Masonry from "react-masonry-css";

const breakpoints = {
  default: 4,
  1500: 3,
  1200: 2,
  980: 1,
};

export default function CardsLayout({ children }) {
  return (
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {children}
    </Masonry>
  );
}
