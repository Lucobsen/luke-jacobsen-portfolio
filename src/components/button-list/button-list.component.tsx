import React from "react";
import "./button-list.component.scss";

export type Skill = {
  key: string;
  value: string;
};

export enum ButtonListView {
  Horizontal = "horizontal",
  Vertical = "vertical",
}

type ButtonListProps = {
  skills: Skill[];
  listView: ButtonListView;
  onButtonClick: (skill: Skill) => void;
};

/**
 * Button List Component.
 * @param props - a list of skills
 * @returns a button list component
 */
export const ButtonList = (props: ButtonListProps) => {
  const skills: Skill[] = props.skills;

  return (
    <div className={`button-list ${props.listView}`}>
      {skills.map((skill: Skill, index: number) => (
        <button key={skill.key} className="button-item" onClick={() => props.onButtonClick(skill)}>
          {skill.value}
        </button>
      ))}
    </div>
  );
};
