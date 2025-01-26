import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { deleteNote, unarchiveNote, archiveNote } from "../utils/network-data";

export default function useNotes(fetchNotesFunction, isArchivedPage = false) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const { data } = await fetchNotesFunction();
        setNotes(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, [fetchNotesFunction]);

  const onKeywordChangeHandler = (newKeyword) => {
    setKeyword(newKeyword);
    setSearchParams({ keyword: newKeyword });
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const onDeleteHandler = async (id) => {
    const response = await deleteNote(id);
    if (response && response.data) {
      setNotes(response.data);
    } else {
      const { data } = await fetchNotesFunction();
      setNotes(data);
    }
  };

  const onArchiveHandler = async (id) => {
    let response;
    if (isArchivedPage) {
      response = await unarchiveNote(id);
    } else {
      response = await archiveNote(id);
    }

    if (response && response.data) {
      setNotes(response.data);
    } else {
      const { data } = await fetchNotesFunction();
      setNotes(data);
    }
  };

  return {
    keyword,
    notes: filteredNotes,
    loading,
    onKeywordChangeHandler,
    onDeleteHandler,
    onArchiveHandler,
  };
}
