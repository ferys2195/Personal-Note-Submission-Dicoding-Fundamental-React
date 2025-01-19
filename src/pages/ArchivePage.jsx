import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { getActiveNotes, getArchivedNotes } from "../utils/local-data";
import NoteList from "../components/NoteList";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import Page from "../components/Page";

export default function ArchivePage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const keywordFromURL = searchParams.get("keyword") || "";
  const [keyword, setKeyword] = useState(keywordFromURL);
  const [activeNotes] = useState(getArchivedNotes);

  const onDeleteHandler = (id) => {
    deleteContact(id);
    setContacts(getContacts());
  };

  const onKeywordChangeHandler = (newKeyword) => {
    setKeyword(newKeyword);
    setSearchParams({ keyword: newKeyword });
  };

  const filteredNotes = activeNotes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <Page title={"Arsip"}>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <div className="mt-5 grid grid-cols-4 gap-3">
        <NoteList notes={filteredNotes} onDelete={onDeleteHandler} />
      </div>
      <Button onClick={() => navigate("new")}>
        <FiPlus className="text-black text-xl" />
      </Button>
    </Page>
  );
}
