import React from "react";
import { Container } from "../container/container.component";
import { developerData } from "./developer-data.model";
import "./developer-section.component.scss";

/**
 * Developer Section.
 * @returns developer component
 */
export const DeveloperSection = () => {
  return (
    <div className="container-wrapper">
      {developerData.map((section) => (
        <Container id={section.id} title={section.title} content={section.content} />
      ))}
    </div>
  );
};
