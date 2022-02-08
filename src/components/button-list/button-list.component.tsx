import React from "react";
import "./button-list.component.scss";

export type Skill = {
  key: string;
  value: string;
};

type ButtonListProps = {
  skills: Skill[];
  onButtonClick: (skill: Skill) => void;
};

export const ButtonList = (props: ButtonListProps) => {
  const skills: Skill[] = props.skills;

  return (
    <div className="button-list">
      {skills.map((skill: Skill, index: number) => (
        <button key={skill.key} className="button-item" onClick={() => props.onButtonClick(skill)}>
          {skill.value}
        </button>
      ))}
    </div>
  );
};
