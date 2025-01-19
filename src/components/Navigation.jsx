import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <h1 className="text-center font-bold text-5xl p-3 border border-base-200 mb-3">
        <Link to={"/"}>Personal Note</Link>
      </h1>

      <div className="flex justify-center items-center gap-3">
        <ul className="menu menu-vertical gap-3 lg:menu-horizontal bg-base-200 rounded-box">
          <li>
            <Link to={"/"}>All</Link>
          </li>
          <li>
            <Link to={"/"}>Active</Link>
          </li>
          <li>
            <Link to={"/"}>Archive</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
