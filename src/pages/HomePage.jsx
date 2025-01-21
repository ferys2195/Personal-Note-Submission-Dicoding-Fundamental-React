import React, { useState } from "react";
import {
  archiveUnarchiveNote,
  deleteNote,
  getActiveNotes,
} from "../utils/local-data";
import NoteList from "../components/NoteList";
import { useNavigate, useSearchParams } from "react-router";
import SearchBar from "../components/SearchBar";
import { FiPlus } from "react-icons/fi";

export default function HomePage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const keywordFromURL = searchParams.get("keyword") || "";
  const [keyword, setKeyword] = useState(keywordFromURL);
  const [notes, setNotes] = useState(getActiveNotes());

  const onKeywordChangeHandler = (newKeyword) => {
    setKeyword(newKeyword);
    setSearchParams({ keyword: newKeyword });
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const onDeleteHandler = (id) => {
    deleteNote(id);
    setNotes(getActiveNotes());
  };
  const onArchiveHandler = (id) => {
    archiveUnarchiveNote(id);
    setNotes(getActiveNotes());
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
          <p className="text-xl text-gray-500">Tidak ada catatan</p>
        </div>
      )}
      <div className="absolute bottom-10 right-10">
        <button
          className="btn btn-circle btn-primary"
          onClick={() => navigate("/new")}
        >
          <FiPlus />
        </button>
      </div>
    </>
  );
}
