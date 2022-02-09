import React from "react";
import { Container } from "../container/container.component";

const musicianData = {
  id: "instruments",
  title: "Instruments",
  content: [
    {
      mainTitle: "Guitar",
      description: [
        "Over ten years of experience.",
        "Wrote multiple songs on acoustic guitar.",
        "Have performed live in a number of bands.",
        "Have recorded two amateur tracks.",
      ],
    },
    {
      mainTitle: "Bass",
      description: ["Three months experience.", "Able to lock in well.", "Great timing."],
    },
    {
      mainTitle: "Vocals",
      description: [
        "Over twenty years experience.",
        "Sang in multiple stage shows.",
        "Have sang in every song I have written and recorded.",
      ],
    },
  ],
};

/**
 *
 * @returns
 */
export const MusicianSection = () => {
  return (
    <div>
      <Container title={musicianData.title} content={musicianData.content} />
    </div>
  );
};
