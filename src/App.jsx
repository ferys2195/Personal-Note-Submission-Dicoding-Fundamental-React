import Navigation from "./components/Navigation";
import AddPage from "./pages/AddPage";
import ArchivePage from "./pages/ArchivePage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import "./styles/style.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="container mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/archives" element={<ArchivePage />} />
          <Route path="/new" element={<AddPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
