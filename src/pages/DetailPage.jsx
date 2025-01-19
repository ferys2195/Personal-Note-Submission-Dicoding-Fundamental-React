import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import NoteDetail from "../components/NoteDetail";
import NotFoundPage from "./NotFoundPage";

export default function DetailPage() {
  const { id } = useParams();
  const [note] = useState(getNote(id));

  return note ? <NoteDetail {...note} /> : <NotFoundPage />;
}
