import React from "react";
import { Container } from "../container/container.component";

const masterData = {
  id: "campaigns",
  title: "Campaigns",
  content: [
    {
      myTitle: "Software Engineer",
      mainTitle: "Project Central",
      description: [
        "Ported the product's codebase from Aurelia to Angular.",
        "Developed the product from MVP to a full subscription based model.",
        "Integrated the product with Microsoft 365 Integrations (Teams, Outlook, Sharepoint).",
        "Refined User Stories before they were added to Sprints.",
        "Partook in Monthly Company Meetings.",
      ],
    },
  ],
};

/**
 * Dungeon Master Section.
 * @returns hobby (dungeon master) component
 */
export const MasterSection = () => {
  return (
    <div>
      <Container id={masterData.id} title={masterData.title} content={masterData.content} />
    </div>
  );
};
