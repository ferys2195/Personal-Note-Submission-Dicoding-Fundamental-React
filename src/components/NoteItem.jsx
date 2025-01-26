import React from "react";
import { Link } from "react-router";
import { showFormattedDate } from "../utils";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import showDialog from "../utils/dialog";
import { convert } from "html-to-text";
import PropTypes from "prop-types";
import { noteItemPropTypes } from "../utils/customPropTypes";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";

export default function NoteItem({
  id,
  title,
  createdAt,
  body,
  archived,
  onDelete,
  onArchive,
}) {
  const { locale } = useContext(AppContext);
  return (
    <div className="flex flex-col bg-gradient-to-t from-base-200 to-base-100 shadow-md rounded-xl p-3 w-full">
      <div className="flex-grow">
        <Link to={`/notes/${id}`}>
          <h2 className="text-xl font-bold">{title}</h2>
        </Link>
        <small>{showFormattedDate(createdAt, locale)}</small>
        <p className="text-base-content line-clamp-4">{convert(body)}</p>
      </div>
      <div className="flex justify-end items-center gap-2 p-1 mt-3">
        {!archived ? (
          <button
            title={locale === "id" ? "Arsipkan" : "Archive"}
            className="btn btn-ghost btn-sm btn-square"
            type="button"
            onClick={() => onArchive(id)}
          >
            <BiArchiveIn className="text-secondary text-xl" />
          </button>
        ) : (
          <button
            title={
              locale === "id" ? "Pindahkan dari Arsip" : "Move from Archive"
            }
            type="button"
            className="btn btn-ghost btn-sm btn-square"
            onClick={() => onArchive(id)}
          >
            <BiArchiveOut className="text-primary text-xl" />
          </button>
        )}

        <button
          title={locale === "id" ? "Hapus Catatan" : "Delete Notes"}
          className="btn btn-ghost btn-sm btn-square"
          onClick={() =>
            showDialog({
              title:
                locale === "id" ? "Konfirmasi Penghapusan" : "Delete Confirm",
              text:
                locale === "id"
                  ? "Apakah Anda yakin ingin menghapus catatan ini ?"
                  : "Are you sure you want to delete this record ?",
              confirmButtonText:
                locale === "id" ? "Hapus Sekarang" : "Delete Now",
              cancelButtonText: locale === "id" ? "Batal" : "Cancel",
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
