import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import ArchivePage from "./pages/ArchivePage";
import NotFoundPage from "./pages/NotFoundPage";
import Navigation from "./components/Navigation";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import {
  getAccessToken,
  getUserLogged,
  login,
  putAccessToken,
} from "./utils/network-data";
import AppContext from "./contexts/AppContext";
import { MdGTranslate } from "react-icons/md";
import { CiDark, CiLight } from "react-icons/ci";

const navigate = useNavigate;

function App() {
  const [userLogged, setUserLogged] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!getAccessToken());

  const [themeData, setThemeData] = useState(
    localStorage.getItem("theme") || "light"
  );

  const [locale, setLocale] = useState(localStorage.getItem("locale") || "id");

  const toggleLocale = () => {
    setLocale((prevState) => (prevState === "id" ? "en" : "id"));
    localStorage.setItem("locale", locale === "id" ? "en" : "id");
  };

  const toggleTheme = () => {
    setThemeData((prevState) => (prevState === "light" ? "dark" : "light"));
    localStorage.setItem("theme", themeData === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeData);
  }, [themeData]);

  useEffect(() => {
    const accessToken = getAccessToken();
    async function init() {
      try {
        const { data } = await getUserLogged();
        setIsAuthenticated(true);
        setUserLogged(data);
      } catch (error) {
        setIsAuthenticated(false);
      }
    }

    if (accessToken != null) {
      init();
    }
  }, [isAuthenticated]);

  const handleLogin = async ({ email, password }) => {
    try {
      const { data } = await login({ email, password });
      putAccessToken(data.accessToken);
      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      return error;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setUserLogged(null);
    setIsAuthenticated(false);
  };
  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        userLogged,
        themeData,
        toggleTheme,
        locale,
        toggleLocale,
        handleLogout,
      }}
    >
      {!isAuthenticated ? (
        <>
          <header className="p-3 fixed top-0 left-0 right-0">
            <div className="flex justify-end gap-3 me-5">
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
              <label className="swap">
                <input type="checkbox" onChange={() => toggleLocale()} />
                <div className="swap-on flex items-center gap-2">
                  <MdGTranslate /> <span className="uppercase">{locale}</span>
                </div>
                <div className="swap-off flex items-center gap-2">
                  <MdGTranslate /> <span className="uppercase">{locale}</span>
                </div>
              </label>
            </div>
          </header>
          <main className="grid place-items-center min-h-screen">
            <section className="w-full mx-auto p-3 md:w-1/2 lg:w-1/4">
              <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<LoginPage onLogin={handleLogin} />} />
              </Routes>
            </section>
          </main>
        </>
      ) : userLogged ? (
        <>
          <header className="mb-5 shadow">
            <Navigation />
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
      ) : null}
    </AppContext.Provider>
  );
}

export default App;
