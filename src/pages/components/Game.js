import React from "react";
import GameLoop from "./GameLoop";
import GameUI from "./GameUI";
import TileView from "./TileView";

const Game = () => {
  return (
    <>
      <GameUI />
      <GameLoop>
        <TileView />
      </GameLoop>
    </>
  );
};

export default Game;
