import React, { useContext } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { FiArchive, FiHome, FiLogOut } from "react-icons/fi";
import { MdGTranslate } from "react-icons/md";
import { Link } from "react-router";
import AppContext from "../contexts/AppContext";
import showDialog from "../utils/dialog";
import LocaleToggle from "./LocaleToggle";
import ThemeToggle from "./ThemeToggle";
import LogoutButton from "./LogoutButton";

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
          <LocaleToggle locale={locale} toggleLocale={toggleLocale} />
          <ThemeToggle themeData={themeData} toggleTheme={toggleTheme} />
          <LogoutButton title={userLogged.name} handleLogout={handleLogout} />
        </div>
      </div>
    </div>
  );
}
