import React from "react";
import luke from "../../luke-guitar.jpg";
import "./user.component.scss";
import PropTypes from "prop-types";

type UserProps = {
  imagePosition: string;
  onImageClick: (value: null) => void;
};

/**
 * User Image and Name Component.
 * @returns a user component
 */
export const User = (props: UserProps) => {
  const hideUserName = Boolean(props.imagePosition);

  return (
    <div>
      <img
        src={luke}
        className={`user-image ${props.imagePosition}`}
        alt="luke"
        onClick={() => props.onImageClick(null)}
      />

      {hideUserName ? null : <p style={{ marginBottom: 0 }}>Luke Jacobsen</p>}
    </div>
  );
};

User.propTypes = {
  imagePosition: PropTypes.string,
  onImageClick: PropTypes.func.isRequired,
};
