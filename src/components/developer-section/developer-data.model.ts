import { ContainerProps } from "../container/container.component";

const workExperinceData: ContainerProps = {
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
};

const skillsData: ContainerProps = {
  id: "skills",
  title: "Skills",
  content: [
    {
      mainTitle: "Technical Skills",
      description: [
        "TypeScript, JavaScript",
        "React, Angular, Aurelia",
        "Redux, RxJS",
        "HTML, CSS/LESS/SCSS/SASS",
        "Git, Webpack, Node.js",
      ],
    },
    {
      mainTitle: "Communication",
      description: [
        "Participated in multiple team projects and committees.",
        "Dealt with large amounts of customers and staff in previous employment.",
      ],
    },
    {
      mainTitle: "Leadership",
      description: [
        "Oversaw a student house in Irish College.",
        "Won best Leader Award at Cisco Jam.",
        "Have led many bands.",
        "Captained the BISH rowing team to win the Grand League Regatta.",
      ],
    },
    {
      mainTitle: "Team Player",
      description: ["Co-operated with fellow employees everyday when delegating tasks.", "Would always look to help."],
    },
  ],
};

const educationData: ContainerProps = {
  id: "education",
  title: "Education History",
  content: [
    {
      myTitle: "Bachelor of Science (Computer Science & Information Technology)",
      mainTitle: "National University of Ireland, Galway",
      description: ["Final Year Project: Dungeons & Dragons, Dungeon Master Aide"],
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      mainTitle: "Communication",
      description: [
        "Participated in multiple team projects and committees.",
        "Dealt with large amounts of customers and staff in previous employment.",
      ],
    },
    {
      mainTitle: "Leadership",
      description: [
        "Oversaw a student house in Irish College.",
        "Won best Leader Award at Cisco Jam.",
        "Have led many bands.",
        "Captained the BISH rowing team to win the Grand League Regatta.",
      ],
    },
    {
      mainTitle: "Team Player",
      description: ["Co-operated with fellow employees everyday when delegating tasks.", "Would always look to help."],
    },
  ],
};

const languageData: ContainerProps = {
  id: "langauges",
  title: "Languages",
  content: [
    {
      mainTitle: "English",
      description: ["Native Speaker"],
    },
    {
      mainTitle: "Irish",
      description: ["Native Speaker"],
    },
    {
      mainTitle: "French",
      description: ["Conversational Speaker"],
    },
    {
      mainTitle: "Dutch",
      description: ["Basic Speaker"],
    },
    {
      mainTitle: "German",
      description: ["Basic Speaker"],
    },
  ],
};

/**
 * Developer Data.
 * Composed of;
 *  Work Experience
 *  Education
 *  Skills
 *  Projects
 *  Languages
 */
export const developerData = [workExperinceData, educationData, skillsData, languageData];
