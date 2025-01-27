import PropTypes from "prop-types";
import React from "react";
import { MdGTranslate } from "react-icons/md";

export default function LocaleToggle({ locale, toggleLocale }) {
  return (
    <label className="swap">
      <input type="checkbox" onChange={toggleLocale} />
      <div className="swap-on flex items-center gap-2">
        <MdGTranslate /> <span className="uppercase">{locale}</span>
      </div>
      <div className="swap-off flex items-center gap-2">
        <MdGTranslate /> <span className="uppercase">{locale}</span>
      </div>
    </label>
  );
}
LocaleToggle.propTypes = {
  locale: PropTypes.string.isRequired,
  toggleLocale: PropTypes.func.isRequired,
};
