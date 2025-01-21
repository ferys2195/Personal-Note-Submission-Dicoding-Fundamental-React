import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

export default function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {notes.map((note) => {
        return (
          <NoteItem
            key={note.id}
            {...note}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        );
      })}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};
