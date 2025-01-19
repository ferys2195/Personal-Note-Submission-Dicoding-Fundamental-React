import React from "react";
import { showFormattedDate } from "../utils";
import { FiCalendar } from "react-icons/fi";

export default function NoteDetail({ title, body, createdAt }) {
  return (
    <div>
      <div className="mb-3">
        <h1 className="font-bold text-5xl mb-2">{title}</h1>
        <div className="flex gap-x-2 items-center">
          <FiCalendar />
          <small className="text-gray-300 ">
            {showFormattedDate(createdAt)}
          </small>
        </div>
      </div>
      <div>{body}</div>
    </div>
  );
}
