import React from "react";
import "./container.component.scss";

export type Content = {
  myTitle?: string;
  mainTitle: string;
  description: string[];
  startDate?: Date;
  endDate?: Date;
};

export type ContainerProps = {
  id: string;
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
    <div key={props.id} className="main-container">
      <h2 className="container-title">{props.title}</h2>

      {contentList.map((content: Content, sectionIndex: number) => (
        <section key={sectionIndex}>
          {content.myTitle ? <h4 className="container-content-my-title">{content.myTitle}</h4> : null}

          <div className="container-content-header">
            <h5 className="container-content-title">{content.mainTitle}</h5>
            <h6 className="container-content-dates">
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
