import { Link, useRoutes } from "react-router";

import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import ArchivePage from "./pages/ArchivePage";
import { FiArchive, FiHome } from "react-icons/fi";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/archives", element: <ArchivePage /> },
    { path: "/notes/:id", element: <DetailPage /> },
    { path: "/new", element: <AddPage /> },
    { path: "*", element: <NotFoundPage /> },
  ]);
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
      <main className="w-1/2 mx-auto">{routes}</main>
    </>
  );
}

export default App;
