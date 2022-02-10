import React from "react";
import "./button-list.component.scss";

export type Skill = {
  key: string;
  value: string;
};

export enum ButtonListView {
  Center = "center",
  Top = "top",
}

type ButtonListProps = {
  skills: Skill[];
  listView: ButtonListView;
  onButtonClick: (skillKey: string) => void;
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
        <button key={skill.key} className="button-item" onClick={() => props.onButtonClick(skill.key)}>
          {skill.value}
        </button>
      ))}
    </div>
  );
};
