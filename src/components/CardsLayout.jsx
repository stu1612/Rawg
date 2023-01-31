import React, { useEffect, useRef } from "react";

function ResizeGridItem(item) {
  const grid = item.current.parentNode;
  const rowHeight = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
  );
  const rowGap = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
  );
  const rowSpan = Math.ceil(
    (item.current.querySelector(".content").getBoundingClientRect().height +
      rowGap) /
      (rowHeight + rowGap)
  );
  item.current.style.gridRowEnd = "span " + rowSpan;
}

function ResizeAllGridItems() {
  const allItems = document.getElementsByClassName("item");
  for (let x = 0; x < allItems.length; x++) {
    ResizeGridItem(allItems[x]);
  }
}

export default function CardsLayout({ children }) {
  const gridRef = useRef(null);
  const allItemsRef = useRef([]);

  useEffect(() => {
    ResizeAllGridItems();
    window.addEventListener("resize", ResizeAllGridItems);
  }, []);

  return (
    // <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div className="grid">
      <div className="content">{children}</div>
    </div>
  );
}
