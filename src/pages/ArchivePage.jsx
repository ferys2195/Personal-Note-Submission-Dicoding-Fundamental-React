import React from "react";
import { getArchivedNotes } from "../utils/network-data";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import useNotes from "../hooks/useNotes";

export default function ArchivePage() {
  const {
    keyword,
    notes,
    loading,
    onKeywordChangeHandler,
    onDeleteHandler,
    onArchiveHandler,
  } = useNotes(getArchivedNotes, true);
  return (
    <>
      <div className="w-full py-5">
        <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      </div>
      {loading ? (
        <div className="flex justify-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : notes && notes.length > 0 ? (
        <NoteList
          notes={notes}
          onDelete={onDeleteHandler}
          onArchive={onArchiveHandler}
        />
      ) : (
        <div className="flex justify-center items-center h-52">
          <p className="text-xl text-gray-500">Tidak ada catatan</p>
        </div>
      )}
    </>
  );
}
