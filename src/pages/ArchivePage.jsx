import React, { useState } from "react";
import {
  archiveUnarchiveNote,
  deleteNote,
  getArchivedNotes,
} from "../utils/local-data";
import NoteList from "../components/NoteList";
import { useSearchParams } from "react-router";
import SearchBar from "../components/SearchBar";

export default function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keywordFromURL = searchParams.get("keyword") || "";
  const [keyword, setKeyword] = useState(keywordFromURL);
  const [notes, setNotes] = useState(getArchivedNotes());

  const onKeywordChangeHandler = (newKeyword) => {
    setKeyword(newKeyword);
    setSearchParams({ keyword: newKeyword });
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const onDeleteHandler = (id) => {
    deleteNote(id);
    setNotes(getArchivedNotes());
  };
  const onArchiveHandler = (id) => {
    archiveUnarchiveNote(id);
    setNotes(getArchivedNotes());
  };
  return (
    <>
      <div className="w-full py-5">
        <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      </div>
      {filteredNotes && filteredNotes.length > 0 ? (
        <NoteList
          notes={filteredNotes}
          onDelete={onDeleteHandler}
          onArchive={onArchiveHandler}
        />
      ) : (
        <div className="flex justify-center items-center h-52">
          <p className="text-xl text-gray-500">Tidak ada arsip</p>
        </div>
      )}
    </>
  );
}
