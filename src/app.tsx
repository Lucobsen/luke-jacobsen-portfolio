import React, { useState } from "react";
import "./app.scss";
import { ButtonList, ButtonListView, Skill } from "./components/button-list/button-list.component";
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
  const [imagePosition, setImagePosition] = useState<string>("");

  const handleClick = (skill: Skill | null) => {
    setSelectedSkill(skill);

    const imagePosition: string = skill ? "left" : "";

    setImagePosition(imagePosition);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <User imagePosition={imagePosition} onImageClick={handleClick} />

        <ButtonList
          skills={skills}
          listView={selectedSkill ? ButtonListView.Vertical : ButtonListView.Horizontal}
          onButtonClick={handleClick}
        />
      </header>
    </div>
  );
};
