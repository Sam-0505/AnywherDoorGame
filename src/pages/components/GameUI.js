import React, { useContext } from "react";
import { UserContext } from "../userContext";

const GameUI = () => {
  const { globUser, countdown } = useContext(UserContext);

  return (
    <div className="game-ui">
      <h1>Level:{globUser.level}</h1>
      {countdown >= 0 && <p>Time Left: {countdown}</p>}
    </div>
  );
};

export default GameUI;
