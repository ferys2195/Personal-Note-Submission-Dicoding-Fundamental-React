import PropTypes from "prop-types";
import React from "react";
import { CiDark, CiLight } from "react-icons/ci";

export default function ThemeToggle({ themeData, toggleTheme }) {
  return (
    <button className="btn btn-circle btn-ghost btn-sm" onClick={toggleTheme}>
      <label className="swap swap-rotate">
        {themeData === "light" ? (
          <CiLight className="w-5 h-5" />
        ) : (
          <CiDark className="w-5 h-5" />
        )}
      </label>
    </button>
  );
}
ThemeToggle.propTypes = {
  themeData: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
