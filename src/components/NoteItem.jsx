import React from "react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils";
import { FiArchive, FiDelete, FiTrash } from "react-icons/fi";
import { FaArchive, FaTrash } from "react-icons/fa";
import { BiSolidArchiveIn, BiSolidArchiveOut } from "react-icons/bi";
import { deleteNote } from "../utils/local-data";

export default function NoteItem({
  id,
  title,
  createdAt,
  body,
  archived,
  onDelete,
}) {
  return (
    <div className="flex flex-col bg-gradient-to-t from-gray-800 to-gray-700 shadow-md rounded-xl p-3 w-full">
      <div className="flex-grow">
        <Link to={`/notes/${id}`}>
          <h2 className="text-xl font-bold">{title}</h2>
        </Link>
        <small className="text-gray-400">{showFormattedDate(createdAt)}</small>
        <p className="text-gray-100 line-clamp-4">{body}</p>
      </div>
      <div className="flex justify-end items-center gap-x-2 p-1 mt-3">
        {!archived ? (
          <button title="Arsipkan" type="button" onClick={onDelete}>
            <BiSolidArchiveIn className="text-gray-300" />
          </button>
        ) : (
          <button title="Keluarkan dari Arsip" type="button" onClick={onDelete}>
            <BiSolidArchiveOut className="text-green-300" />
          </button>
        )}

        <button title="Hapus Catatan" onClick={deleteNote(id)}>
          <FaTrash className="text-red-500" />
        </button>
      </div>
    </div>
  );
}
