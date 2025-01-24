import React from "react";
import Navigation from "./Navigation";
import PropTypes from "prop-types";
import { useRoutes } from "react-router";
import HomePage from "../pages/HomePage";
import ArchivePage from "../pages/ArchivePage";
import DetailPage from "../pages/DetailPage";
import AddPage from "../pages/AddPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function NoteApp() {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/archives", element: <ArchivePage /> },
    { path: "/notes/:id", element: <DetailPage /> },
    { path: "/new", element: <AddPage /> },
    { path: "*", element: <NotFoundPage /> },
  ]);
  return (
    <>
      <header className="mb-5 shadow">
        <Navigation />
      </header>
      <main className="w-1/2 mx-auto">{routes}</main>
    </>
  );
}
