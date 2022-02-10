import React, { useState } from "react";
import "./app.scss";
import { ButtonList, ButtonListView, Skill } from "./components/button-list/button-list.component";
import { Container } from "./components/container/container.component";
import { DeveloperSection } from "./components/developer-section/developer-section.component";
import { MasterSection } from "./components/master-section/master-section.component";
import { MusicianSection } from "./components/musician-section/musician-section.component";
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
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [imagePosition, setImagePosition] = useState<string>("");

  const handleClick = (skillKey: string | null) => {
    setSelectedSkill(skillKey);

    const imagePosition: string = skillKey ? "left" : "";

    setImagePosition(imagePosition);
  };

  return (
    <div className="app-container">
      {selectedSkill ? null : <User imagePosition={imagePosition} onImageClick={handleClick} />}

      <ButtonList
        skills={skills}
        listView={selectedSkill ? ButtonListView.Top : ButtonListView.Center}
        onButtonClick={handleClick}
      />

      {selectedSkill === skills[0].key ? <DeveloperSection /> : null}
      {selectedSkill === skills[1].key ? <MusicianSection /> : null}
      {selectedSkill === skills[2].key ? <MasterSection /> : null}
    </div>
  );
};
