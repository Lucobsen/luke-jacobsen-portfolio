import React from "react";
import luke from "../../luke-guitar.svg";
import "./user.component.scss";
import PropTypes from "prop-types";

type UserProps = {
  imagePosition: string;
};

/**
 * User Image and Name Component.
 * @returns a user component
 */
export const User = (props: UserProps) => {
  return (
    <div>
      <img src={luke} className={`user-image ${props.imagePosition}`} alt="luke" />

      <p style={{ marginBottom: 0 }}>Luke Jacobsen</p>
    </div>
  );
};

User.propTypes = {
  imagePosition: PropTypes.string,
};
