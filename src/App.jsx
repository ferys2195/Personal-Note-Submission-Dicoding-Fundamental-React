import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes, useRoutes } from "react-router";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import ArchivePage from "./pages/ArchivePage";
import NotFoundPage from "./pages/NotFoundPage";
import Navigation from "./components/Navigation";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import LocaleContext from "./contexts/AppContext";
import { getUserLogged, putAccessToken } from "./utils/network-data";

function App() {
  const [authData, setAuthData] = useState({
    user: null,
    initializing: true,
  });
  const [themeData, setThemeData] = useState("light");

  useEffect(() => {
    async function init() {
      try {
        const { data } = await getUserLogged();
        setAuthData(() => ({ user: data, initializing: false }));
      } catch (error) {
        setAuthData(() => ({ user: null, initializing: false }));
      }
    }

    init();

    if (localStorage.getItem("theme")) {
      setThemeData(localStorage.getItem("theme"));
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeData);
  }, [themeData]);

  const onLoginSuccess = async ({ accessToken }) => {
    try {
      putAccessToken(accessToken);
      const { data } = await getUserLogged();

      setAuthData((prevState) => {
        return {
          ...prevState,
          user: data,
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onLogout = () => {
    setAuthData((prevState) => {
      return {
        ...prevState,
        user: null,
      };
    });
    putAccessToken("");
  };

  const toggleTheme = () => {
    setThemeData((prevState) => (prevState === "light" ? "dark" : "light"));

    localStorage.setItem("theme", themeData === "light" ? "dark" : "light");
  };

  if (authData.initializing) {
    return null;
  }

  return (
    <LocaleContext.Provider
      value={{
        authData,
        themeData,
        toggleTheme,
        onLogout,
      }}
    >
      {authData.user === null ? (
        <div className="w-full min-h-screen flex justify-center items-center">
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/login"
              element={<LoginPage loginSuccess={onLoginSuccess} />}
            />
            <Route path="/*" element={<LoginPage />} />
          </Routes>
        </div>
      ) : (
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
      )}
    </LocaleContext.Provider>
  );
}

export default App;
