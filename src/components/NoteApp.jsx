import React, { useState } from "react";
import Navigation from "./Navigation";
import { getActiveNotes } from "../utils/local-data";

export default function NoteApp(children) {
  const [notes] = useState(getActiveNotes());
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
    </>
  );
}
