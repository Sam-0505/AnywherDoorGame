import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

const WinPage = () => {
  return (
    <div className="homepage">
      <h1>Congratulations !!!</h1>
      <h2>Doraemon is happy</h2>
      <div className="buttons">
        <Link to="/">
          <h2>Main Menu</h2>
        </Link>
      </div>
    </div>
  );
};

export default WinPage;
