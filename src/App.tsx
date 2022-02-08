import React from "react";
import luke from "./luke-guitar.svg";
import "./app.scss";
import { ButtonList } from "./components/button-list/button-list.component";

const skillList: string[] = ["developer", "musician", "dungeon-master"];

export const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <img src={luke} className="app-logo" alt="luke" />

        <p style={{ marginBottom: 0 }}>Luke Jacobsen</p>
        <p style={{ marginTop: 0 }}>Developer, Musician, Master</p>

        <ButtonList skills={skillList} />
      </header>
    </div>
  );
};
