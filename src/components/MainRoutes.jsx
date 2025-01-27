import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import ArchivePage from "../pages/ArchivePage";
import DetailPage from "../pages/DetailPage";
import AddPage from "../pages/AddPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/archives" element={<ArchivePage />} />
      <Route path="/notes/:id" element={<DetailPage />} />
      <Route path="/new" element={<AddPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
