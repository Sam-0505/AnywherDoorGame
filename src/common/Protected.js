import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "./auth";

function Protected(props) {
  const { Component } = props;

  const { levelNumber } = useParams();
  const check = useAuth(levelNumber);
  const nav = useNavigate();

  return check && <Component />;
}

export default Protected;
