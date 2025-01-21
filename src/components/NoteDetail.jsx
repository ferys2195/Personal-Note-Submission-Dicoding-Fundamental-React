import React from "react";
import { showFormattedDate } from "../utils";
import { FiCalendar } from "react-icons/fi";
import PropTypes from "prop-types";
import parse from "html-react-parser";

export default function NoteDetail({ title, body, createdAt }) {
  return (
    <div className="p-3 w-full mx-auto">
      <div className="mb-3">
        <h1 className="font-bold text-5xl mb-2">{title}</h1>
        <div className="flex gap-x-2 items-center">
          <FiCalendar />
          <small className="text-gray-300 ">
            {showFormattedDate(createdAt)}
          </small>
        </div>
      </div>
      <div className="w-full prose">{parse(body)}</div>
    </div>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
