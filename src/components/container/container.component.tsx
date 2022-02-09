import React from "react";
import "./container.component.scss";

type ContainerProps = {
  title: string;
  content: string[];
};

/**
 * Container Component.
 * @returns a container element
 */
export const Container = (props: ContainerProps) => {
  const content: string[] = props.content;

  return (
    <div className="main-container">
      <h2 className="container-title">{props.title}</h2>

      {content.map((text: string, index: number) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );
};
