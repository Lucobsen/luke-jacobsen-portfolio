import React from "react";
import PropTypes from "prop-types";

export const ButtonList = (props: { skills: string[] }) => {
  return (
    <div>
      {props.skills.map((skill: string) => (
        <button>{skill}</button>
      ))}
    </div>
  );
};

ButtonList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};
