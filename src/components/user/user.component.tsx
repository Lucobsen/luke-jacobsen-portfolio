import React from "react";
import luke from "../../luke-guitar.svg";

/**
 * User Image and Name Component.
 * @returns a user component
 */
export const User = () => {
  return (
    <div>
      <img src={luke} className="app-logo" alt="luke" />

      <p style={{ marginBottom: 0 }}>Luke Jacobsen</p>
    </div>
  );
};
