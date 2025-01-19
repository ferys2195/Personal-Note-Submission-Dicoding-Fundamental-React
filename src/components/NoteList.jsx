import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList({ notes, onDelete }) {
  return (
    <>
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
        ))
      ) : (
        <p>Tidak ada data</p>
      )}
    </>
  );
}
