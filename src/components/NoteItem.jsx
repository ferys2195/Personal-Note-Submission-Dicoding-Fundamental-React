import React from "react";
import { Link } from "react-router";
import { showFormattedDate } from "../utils";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import showDialog from "../utils/dialog";
import { convert } from "html-to-text";
import PropTypes from "prop-types";
import { noteItemPropTypes } from "../utils/custom-prop-type";

export default function NoteItem({
  id,
  title,
  createdAt,
  body,
  archived,
  onDelete,
  onArchive,
}) {
  return (
    <div className="flex flex-col bg-gradient-to-t from-gray-800 to-gray-700 shadow-md rounded-xl p-3 w-full">
      <div className="flex-grow">
        <Link to={`/notes/${id}`}>
          <h2 className="text-xl font-bold">{title}</h2>
        </Link>
        <small className="text-gray-400">{showFormattedDate(createdAt)}</small>
        <p className="text-gray-100 line-clamp-4">{convert(body)}</p>
      </div>
      <div className="flex justify-end items-center gap-2 p-1 mt-3">
        {!archived ? (
          <button
            title="Arsipkan"
            className="btn btn-ghost btn-sm btn-square"
            type="button"
            onClick={() => onArchive(id)}
          >
            <BiArchiveIn className="text-secondary text-xl" />
          </button>
        ) : (
          <button
            title="Keluarkan dari Arsip"
            type="button"
            className="btn btn-ghost btn-sm btn-square"
            onClick={() => onArchive(id)}
          >
            <BiArchiveOut className="text-primary text-xl" />
          </button>
        )}

        <button
          title="Hapus Catatan"
          className="btn btn-ghost btn-sm btn-square"
          onClick={() =>
            showDialog({
              title: "Konfirmasi Penghapusan",
              text: "Apakah Anda yakin ingin menghapus catatan ini?",
              confirmButtonText: "Hapus Sekarang",
              action: () => onDelete(id),
            })
          }
        >
          <FaTrash className="text-error text-xl" />
        </button>
      </div>
    </div>
  );
}

NoteItem.propTypes = noteItemPropTypes;
NoteItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};
