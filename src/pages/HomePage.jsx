import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { deleteNote, getActiveNotes, getAllNotes } from "../utils/local-data";
import NoteList from "../components/NoteList";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import Page from "../components/Page";

export default function HomePage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const keywordFromURL = searchParams.get("keyword") || "";
  const [keyword, setKeyword] = useState(keywordFromURL);
  const [notes, setNotes] = useState(getAllNotes());

  const onKeywordChangeHandler = (newKeyword) => {
    setKeyword(newKeyword);
    setSearchParams({ keyword: newKeyword });
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const onDeleteHandler = (id) => {
    // console.log(id);
    deleteNote(id);
    setNotes(notes);
  };

  return (
    // <Page title={"Catatan Aktif"}>
    //   <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
    //   {/* <div class="w-1/4 my-2">
    //     <div class="relative right-0">
    //       <ul
    //         class="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100"
    //         data-tabs="tabs"
    //         role="list"
    //       >
    //         <li class="z-30 flex-auto text-center">
    //           <a
    //             class="z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer text-slate-600 bg-inherit"
    //             data-tab-target=""
    //             role="tab"
    //             aria-selected="true"
    //           >
    //             All
    //           </a>
    //         </li>
    //         <li class="z-30 flex-auto text-center">
    //           <a
    //             class="z-30 flex items-center justify-center w-full px-0 py-2 mb-0 text-sm transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-600 bg-inherit"
    //             data-tab-target=""
    //             role="tab"
    //             aria-selected="false"
    //           >
    //             Active Notes
    //           </a>
    //         </li>
    //         <li class="z-30 flex-auto text-center">
    //           <a
    //             class="z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
    //             data-tab-target=""
    //             role="tab"
    //             aria-selected="false"
    //           >
    //             Archive
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div> */}
    //   <div className="mt-5 grid grid-cols-4 gap-3">
    //     <NoteList notes={filteredNotes} />
    //   </div>
    //   <Button onClick={() => navigate("new")}>
    //     <FiPlus className="text-black text-xl" />
    //   </Button>
    // </Page>
    <div>
      <div className="w-1/2 mx-auto py-5">
        <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      </div>
      <div className="mt-5 grid grid-cols-4 gap-3">
        <NoteList notes={filteredNotes} />
      </div>
      <Button onClick={() => navigate("new")}>
        <FiPlus className="text-black text-xl" />
      </Button>
    </div>
  );
}
