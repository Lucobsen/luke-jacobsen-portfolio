import React, { useState } from "react";
import { Container } from "../container/container.component";

const musicianData = {
  id: "instruments",
  title: "Instruments",
  content: ["Vocals", "Guitar", "Bass", "Egg"],
};

/**
 *
 * @returns
 */
export const MusicianSection = () => {
  const [sectionTitle, setSectionTitle] = useState(musicianData.title);
  const [sectionContent, setSectionContent] = useState(musicianData.content);

  return (
    <div>
      <Container title={sectionTitle} content={sectionContent} />
    </div>
  );
};
