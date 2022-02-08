import React, { useState } from "react";
import luke from "./luke-guitar.svg";
import "./app.scss";
import { ButtonList, Skill } from "./components/button-list/button-list.component";

const skillList: Skill[] = [
  {
    key: "developer",
    value: "Developer",
  },
  {
    key: "musician",
    value: "Musician",
  },
  {
    key: "master",
    value: "Dungeon Master",
  },
];

export const App = () => {
  const [skills, setSkills] = useState<Skill[]>(skillList);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleClick = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <img src={luke} className="app-logo" alt="luke" />

        <p style={{ marginBottom: 0 }}>Luke Jacobsen</p>

        <ButtonList skills={skills} onButtonClick={handleClick} />
      </header>
    </div>
  );
};
