import React, { useContext } from "react";
import showDialog from "../utils/dialog";
import { FiLogOut } from "react-icons/fi";
import PropTypes from "prop-types";
import AppContext from "../contexts/AppContext";

export default function LogoutButton({ title, handleLogout }) {
  const { locale } = useContext(AppContext);

  return (
    <button
      className="btn btn-sm btn-ghost"
      onClick={() =>
        showDialog({
          title:
            locale === "id" ? "Keluar dari akun ?" : "Sign out from account ? ",
          text:
            locale === "id"
              ? "Apakah Anda ingin logout sekarang ?"
              : "Do you want to sign out now ?",
          confirmButtonText: locale === "id" ? "Ya" : "Yes",
          cancelButtonText: locale === "id" ? "Batal" : "Cancel",
          action: () => handleLogout(),
        })
      }
    >
      <FiLogOut /> {title}
    </button>
  );
}

LogoutButton.propTypes = {
  title: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
};
