import React, { useState } from "react";
import { Container } from "../container/container.component";

const developerData = {
  id: "work-experience",
  title: "Work Experience",
  content: ["Did some work", "Did other work", "Finally did more work"],
};

/**
 * Developer Section.
 * @returns developer component
 */
export const DeveloperSection = () => {
  const [sectionTitle, setSectionTitle] = useState(developerData.title);
  const [sectionContent, setSectionContent] = useState(developerData.content);

  return (
    <div>
      <Container title={sectionTitle} content={sectionContent} />
    </div>
  );
};
