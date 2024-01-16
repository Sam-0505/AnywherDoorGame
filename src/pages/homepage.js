import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./userContext";
import { reset } from "../view/slices/characterSlice";
import { connect } from "react-redux";

const Home = () => {
  const { globUser, setGlobUser } = useContext(UserContext);
  const nav = useNavigate();

  useEffect(() => {
    reset();
    setGlobUser({ score: 0, level: 1 });
  }, []);

  const start = () => {
    localStorage.setItem("level", 1);
    nav("/1");
  };

  return (
    <div className="homepage">
      <h1>Anywhere Door</h1>
      <div className="buttons">
        <div className="pixel2" onClick={start}>
          <h2>Play</h2>
        </div>
      </div>
    </div>
  );
};

const mapDispatch = { reset };

export default connect(null, mapDispatch)(Home);
