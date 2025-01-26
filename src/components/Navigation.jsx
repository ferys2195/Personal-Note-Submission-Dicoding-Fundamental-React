import React, { useContext } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { FiArchive, FiHome, FiLogOut } from "react-icons/fi";
import { MdGTranslate } from "react-icons/md";
import { Link } from "react-router";
import AppContext from "../contexts/AppContext";
import showDialog from "../utils/dialog";

export default function Navigation() {
  const {
    userLogged,
    themeData,
    toggleTheme,
    locale,
    toggleLocale,
    handleLogout,
  } = useContext(AppContext);

  return (
    <div className="w-3/5 mx-auto navbar bg-base-100">
      <div className="flex-1">
        <h1 className="font-bold text-2xl">
          <Link to={"/"}>
            {locale === "id" ? "Catatan Pribadi" : "Personal Note"}
          </Link>
        </h1>
      </div>
      <div className="flex-none gap-2">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>
              <FiHome /> {locale === "id" ? "Beranda" : "Home"}
            </Link>
          </li>
          <li>
            <Link to={"/archives"}>
              <FiArchive /> {locale === "id" ? "Diarsipkan" : "Archived"}
            </Link>
          </li>
        </ul>
        <div className="flex items-center justify-center gap-3">
          <label className="swap">
            <input type="checkbox" onChange={() => toggleLocale()} />
            <div className="swap-on flex items-center gap-2">
              <MdGTranslate /> <span className="uppercase">{locale}</span>
            </div>
            <div className="swap-off flex items-center gap-2">
              <MdGTranslate /> <span className="uppercase">{locale}</span>
            </div>
          </label>
          <button
            className="btn btn-circle btn-ghost btn-sm"
            onClick={() => toggleTheme()}
          >
            <label className="swap swap-rotate">
              {themeData == "light" ? (
                <CiLight className="w-5 h-5" />
              ) : (
                <CiDark className="w-5 h-5" />
              )}
            </label>
          </button>

          <button
            className="btn btn-sm btn-ghost"
            onClick={() =>
              showDialog({
                title: "Logout dari akun ?",
                text: "Apakah Anda ingin logout sekarang ?",
                confirmButtonText: "Ya",
                action: () => handleLogout(),
              })
            }
          >
            <FiLogOut /> {userLogged.name}
          </button>
        </div>
      </div>
    </div>
  );
}
