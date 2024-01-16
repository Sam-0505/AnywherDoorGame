import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = (level) => {
  const [isLevel, setIsLevel] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    const localLevel = localStorage.getItem("level");
    if (localLevel == level) {
      setIsLevel("true");
    } else {
      nav("/");
    }
  }, [level]);

  return isLevel;
};

export default useAuth;
