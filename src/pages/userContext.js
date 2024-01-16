import React, { createContext, useState, useEffect } from "react";
import { COUNTDOWN } from "../common/constants";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [globUser, setGlobUser] = useState({ score: 0, level: 1 });
  const [countdown, setCountdown] = useState(COUNTDOWN); // Initial countdown time in seconds

  useEffect(() => {
    const timer =
      countdown > 0 && setInterval(() => setCountdown(countdown - 1), 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <UserContext.Provider
      value={{ globUser, setGlobUser, countdown, setCountdown }}
    >
      {children}
    </UserContext.Provider>
  );
}
