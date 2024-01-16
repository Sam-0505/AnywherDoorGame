import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "./userContext";
import { COUNTDOWN } from "../common/constants";

const NextLevel = () => {
  const { globUser, setGlobUser, countdown, setCountdown } =
    useContext(UserContext);

  const nextLevel = `/${globUser.level}`;

  useEffect(() => {
    localStorage.setItem("level", globUser.level);
  }, []);

  return (
    <div className="homepage">
      <h1>YOU WON!!!</h1>
      <h2>Total Score:{Number(globUser.score.toFixed(2))}</h2>

      <div className="buttons">
        <Link to={nextLevel}>
          <div className="pixel2" onClick={setCountdown(COUNTDOWN)}>
            <h2>Next Level</h2>
          </div>
        </Link>
      </div>
      <div className="buttons">
        <Link to="/">
          <div className="pixel2">
            <h2>Main Menu</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NextLevel;
