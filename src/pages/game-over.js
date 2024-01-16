import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "./userContext";
import { COUNTDOWN } from "../common/constants";

const GameOver = () => {
  const { globUser, setCountdown } = useContext(UserContext);
  const nextLevel = `/${globUser.level}`;
  return (
    <div className="homepage">
      <h1>GAME OVER !!!</h1>
      <h2>Final Score:{globUser.score}</h2>
      <div className="buttons">
        <Link to={nextLevel}>
          <div className="pixel2" onClick={setCountdown(COUNTDOWN)}>
            <h2>Play Again</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GameOver;
