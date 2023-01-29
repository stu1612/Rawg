import React from "react";

export default function GameCard({ game }) {
  return <div className="border-2 h-64 rounded-lg">{game.name}</div>;
}
