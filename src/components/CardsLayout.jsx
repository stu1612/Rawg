// npm
import Masonry from "react-masonry-css";

const breakpoints = {
  default: 4,
  1400: 3,
  1100: 2,
  800: 1,
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
