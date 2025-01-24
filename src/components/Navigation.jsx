import React, { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { FiArchive, FiHome, FiLogOut } from "react-icons/fi";
import { MdGTranslate } from "react-icons/md";
import { Link } from "react-router";

export default function Navigation() {
  const [themeData, setThemeData] = useState(
    localStorage.getItem("theme") || "light"
  );
  const toggleTheme = () => {
    setThemeData((prevState) => (prevState === "light" ? "dark" : "light"));
    localStorage.setItem("theme", themeData === "light" ? "dark" : "light");
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeData);
  }, [themeData]);

  return (
    <div className="w-3/5 mx-auto navbar bg-base-100">
      <div className="flex-1">
        <h1 className="font-bold text-2xl">
          <Link to={"/"}>Personal Note</Link>
        </h1>
      </div>
      <div className="flex-none gap-2">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>
              <FiHome /> Home
            </Link>
          </li>
          <li>
            <Link to={"/archives"}>
              <FiArchive /> Archived
            </Link>
          </li>
        </ul>
        <div className="flex items-center justify-center gap-3">
          <label className="swap">
            <input type="checkbox" />
            <div className="swap-on flex items-center gap-2">
              <MdGTranslate /> ID
            </div>
            <div className="swap-off flex items-center gap-2">
              <MdGTranslate /> EN
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
          <button className="btn btn-sm btn-ghost">
            <FiLogOut /> Fery Irawan
          </button>
        </div>
      </div>
    </div>
  );
}
