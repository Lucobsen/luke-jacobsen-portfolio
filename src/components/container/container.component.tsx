import React from "react";
import "./container.component.scss";

export type Content = {
  myTitle?: string;
  mainTitle: string;
  description: string[];
  startDate?: Date;
  endDate?: Date;
};

type ContainerProps = {
  title: string;
  content: Content[];
};

/**
 * Container Component.
 * @returns a container element
 */
export const Container = (props: ContainerProps) => {
  const contentList: Content[] = props.content;

  return (
    <div className="main-container">
      <h2 className="container-title">{props.title}</h2>

      {contentList.map((content: Content, sectionIndex: number) => (
        <section key={sectionIndex}>
          <div className="container-main-content-header">
            <h4 className="container-main-content-title">{content.mainTitle}</h4>
            <h6 className="container-main-content-dates">
              {content.startDate?.toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
            </h6>
          </div>

          <ul className="container-content-list">
            {content.description.map((text: string, descriptionIndex: number) => (
              <li key={descriptionIndex}>{text}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};
