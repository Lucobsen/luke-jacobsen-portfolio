import React from "react";
import { Container } from "../container/container.component";

const developerData = [
  {
    id: "work-experience",
    title: "Work Experience",
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
        startDate: new Date(),
      },
      {
        myTitle: "Frontend Software Intern",
        mainTitle: "Altocloud",
        description: [
          "Updated and wrote Frontend Features for Altocloud's Customer Analytics Software.",
          "Performed multiple code reviews.",
          "Deployed code to production on a weekly basis.",
          "Was part of a Sprint-Team, and partook in regular Agile Meetings.",
        ],
        startDate: new Date(),
        endDate: new Date(),
      },
    ],
  },
];

/**
 * Developer Section.
 * @returns developer component
 */
export const DeveloperSection = () => {
  return (
    <div>
      {developerData.map((section) => (
        <Container key={section.id} title={section.title} content={section.content} />
      ))}
    </div>
  );
};
