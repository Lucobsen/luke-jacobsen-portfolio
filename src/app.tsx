import React, { useState } from "react";
import "./app.scss";
import { ButtonList, Skill } from "./components/button-list/button-list.component";
import { User } from "./components/user/user.component";

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

/**
 * Main App Component.
 * @returns the main App
 */
export const App = () => {
  const [skills, setSkills] = useState<Skill[]>(skillList);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleClick = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <User />

        <ButtonList skills={skills} onButtonClick={handleClick} />
      </header>
    </div>
  );
};
