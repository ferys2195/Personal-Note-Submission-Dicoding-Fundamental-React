import { Link, Route, Routes } from "react-router";

import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import ArchivePage from "./pages/ArchivePage";
import { FiArchive, FiHome } from "react-icons/fi";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <header className="mb-5 shadow p-1">
        <h1 className="p-2 text-center font-bold text-5xl mb-2">
          <Link to={"/"}>Personal Note</Link>
        </h1>
        <div className="flex justify-center items-center mb-2">
          <ul className="menu menu-vertical gap-2 lg:menu-horizontal bg-base-200 rounded-box">
            <li className="active">
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
        </div>
      </header>
      <main className="w-1/2 mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archives" element={<ArchivePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/new" element={<AddPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
