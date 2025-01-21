import PropTypes from "prop-types";
import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { FiSave } from "react-icons/fi";

export default function NoteInput({ addNote }) {
  const [form, setForm] = useState({
    title: "",
    body: "",
  });

  const handleChange = (name, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({
      title: form.title,
      body: form.body, // Form body sudah berisi HTML dari editor TinyMCE
    });
  };

  const editorConfig = {
    toolbar: [
      "undo redo | bold italic underline | bullist numlist | blockquote | codesample | link",
    ],
    plugins: [
      "link",
      "lists",
      "codesample", // Plugin untuk menampilkan dan menyunting kode
    ],
    menubar: false, // Menonaktifkan menu bar
    statusbar: false, // Menonaktifkan status bar
    height: 300, // Tinggi editor
    setup: (editor) => {
      editor.on("change", () => {
        handleChange("body", editor.getContent());
      });
    },
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={(e) => handleChange("title", e.target.value)}
          className="input input-bordered w-full"
          placeholder="Masukan Judul Catatan"
          required
        />
      </div>
      <div className="mb-3">
        <Editor
          apiKey="8m33aadeefn5hpgv08dnot7ha26kmx0sy0mhh5rfrbnenp9v" // Anda bisa mendaftar untuk mendapatkan API Key
          value={form.body}
          onEditorChange={(value) => handleChange("body", value)}
          init={editorConfig}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        <FiSave /> Simpan Catatan
      </button>
    </form>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};
