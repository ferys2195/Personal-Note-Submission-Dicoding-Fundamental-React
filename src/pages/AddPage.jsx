import React from "react";
import { useNavigate } from "react-router";
import { addNote } from "../utils/network-data";
import NoteInput from "../components/NoteInput";

export default function AddPage() {
  const navigate = useNavigate();

  function addNoteHandler(note) {
    addNote(note);
    navigate("/");
  }
  return (
    <section className="w-3/4 mx-auto">
      <h1 className="text-2xl font-semibold mb-3">Add Note</h1>
      <NoteInput addNote={addNoteHandler} />
    </section>
  );
}
