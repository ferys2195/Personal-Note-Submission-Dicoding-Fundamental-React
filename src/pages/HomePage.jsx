import React from "react";
import NoteList from "../components/NoteList";
import { useNavigate } from "react-router";
import SearchBar from "../components/SearchBar";
import { FiPlus } from "react-icons/fi";
import { getActiveNotes } from "../utils/network-data";
import useNotes from "../hooks/useNotes";

export default function HomePage() {
  const navigate = useNavigate();
  const {
    keyword,
    notes,
    loading,
    onKeywordChangeHandler,
    onDeleteHandler,
    onArchiveHandler,
  } = useNotes(getActiveNotes);
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
