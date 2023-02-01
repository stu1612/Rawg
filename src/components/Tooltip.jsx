import React from "react";

export default function Tooltip({ message }) {
  return (
    <small className="absolute top-[-30px] right-[-10px] background px-2 text-[12px] ">
      {message}
    </small>
  );
}
