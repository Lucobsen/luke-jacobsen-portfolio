import React, { useState } from "react";
import { Container } from "../container/container.component";

const masterData = {
  id: "campaigns",
  title: "Campaigns",
  content: ["Amsterdam D&D", "The Gregorians", "The Murder HOBOs"],
};

/**
 *
 * @returns
 */
export const MasterSection = () => {
  const [sectionTitle, setSectionTitle] = useState(masterData.title);
  const [sectionContent, setSectionContent] = useState(masterData.content);

  return (
    <div>
      <Container title={sectionTitle} content={sectionContent} />
    </div>
  );
};
