import React from "react";

import Game from "./pages/components/Game";
import Homepage from "./pages/homepage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { UserContextProvider } from "./pages/userContext";
import GameOver from "./pages/game-over";
import NextLevel from "./pages/next-level";
import { LAYERS } from "./common/constants";
import WinPage from "./pages/winpage";
import Protected from "./common/Protected";

function App() {
  const levelLen = `/next-level/${LAYERS.length + 1}`;
  return (
    <>
      <header></header>
      <main className="content">
        <div className="App">
          <UserContextProvider>
            <Router>
              <Routes>
                <Route exact path="/" element={<Homepage />}></Route>
                <Route
                  exact
                  path="/:levelNumber"
                  element={<Protected Component={Game} />}
                ></Route>
                <Route exact path="/game-over" element={<GameOver />} />
                <Route
                  exact
                  path="/next-level/:levelNumber"
                  element={<NextLevel />}
                />
                <Route exact path={levelLen} element={<WinPage />} />
              </Routes>
            </Router>
          </UserContextProvider>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
