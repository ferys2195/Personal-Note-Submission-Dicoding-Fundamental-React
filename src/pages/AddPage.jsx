import React, { useState } from "react";

export default function AddPage() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({
    title: "",
    body: "",
    archived: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: +new Date(),
      ...form, // Spread properti dari form
      createdAt: new Date().toISOString(),
    };

    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setForm({ title: "", body: "", archived: false }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} className="w-3/5 mx-auto text-black">
      <div>
        <label className="text-white">Judul</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full rounded"
          placeholder="Masukan Judul Catatan"
          required
        />
      </div>
      <div>
        <label className="text-white">Isi</label>
        <textarea
          name="body"
          value={form.body}
          onChange={handleChange}
          className="w-full rounded"
          required
          placeholder="Isi Catatan ..."
        ></textarea>
      </div>
      <div
        className="w-full rounded bg-white min-h-52 before:content-[attr(data-placeholder)] before:text-gray-400 before:absolute before:top-0 before:left-0"
        data-placeholder="Sebenarnya saya adalah ...."
        contentEditable
      ></div>

      <button
        type="submit"
        className="bg-blue-500 p-3 rounded hover:bg-opacity-50 text-white"
      >
        Simpan Catatan
      </button>
    </form>
  );
}
