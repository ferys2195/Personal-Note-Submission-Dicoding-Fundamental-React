import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { FiSave } from "react-icons/fi";
import useInput from "../hooks/useInput";
import editorConfig from "../utils/editorConfig";
import AppContext from "../contexts/AppContext";

export default function NoteInput({ addNote }) {
  const { locale } = useContext(AppContext);
  const [title, setTitle] = useInput("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({
      title,
      body,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          name="title"
          value={title}
          onChange={setTitle}
          className="input input-bordered w-full"
          placeholder={
            locale === "id" ? "Masukkan Judul Catatan" : "Type Note Title"
          }
          required
        />
      </div>
      <div className="mb-3">
        <Editor
          apiKey="8m33aadeefn5hpgv08dnot7ha26kmx0sy0mhh5rfrbnenp9v"
          value={body}
          onEditorChange={setBody}
          init={editorConfig(setBody)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        <FiSave /> {locale === "id" ? "Simpan Catatan" : "Save Note"}
      </button>
    </form>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};
