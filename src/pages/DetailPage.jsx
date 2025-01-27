import React, { useState } from "react";
import { useParams } from "react-router";
import { getNote } from "../utils/network-data";
import NoteDetail from "../components/NoteDetail";
import NotFoundPage from "./NotFoundPage";
import { useEffect } from "react";

export default function DetailPage() {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSingleNote = async () => {
      const { data } = await getNote(id);
      setNote(data);
      setLoading(false);
    };
    getSingleNote();
  }, [id]);
  return loading ? (
    <div className="flex justify-center">
      <span className="loading loading-dots loading-lg"></span>
    </div>
  ) : note ? (
    <NoteDetail {...note} />
  ) : (
    <NotFoundPage />
  );
}
