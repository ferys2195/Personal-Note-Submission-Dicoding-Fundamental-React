import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Navigation from "./components/Navigation";
import {
  getAccessToken,
  getUserLogged,
  login,
  putAccessToken,
} from "./utils/network-data";
import AppContext from "./contexts/AppContext";
import ThemeToggle from "./components/ThemeToggle";
import LocaleToggle from "./components/LocaleToggle";
import AuthRoutes from "./components/AuthRoutes";
import MainRoutes from "./components/MainRoutes";

const navigate = useNavigate;

function App() {
  const [userLogged, setUserLogged] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!getAccessToken());

  const [themeData, setThemeData] = useState(
    localStorage.getItem("theme") || "light"
  );

  const [locale, setLocale] = useState(localStorage.getItem("locale") || "id");

  const toggleLocale = () => {
    const newLocale = locale === "id" ? "en" : "id";
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const toggleTheme = () => {
    const newTheme = themeData === "light" ? "dark" : "light";
    setThemeData(newTheme);
    localStorage.setItem("theme", newTheme);
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
              <ThemeToggle themeData={themeData} toggleTheme={toggleTheme} />
              <LocaleToggle locale={locale} toggleLocale={toggleLocale} />
            </div>
          </header>
          <main className="grid place-items-center min-h-screen">
            <section className="w-full mx-auto p-3 md:w-1/2 lg:w-1/4">
              <AuthRoutes handleLogin={handleLogin} />
            </section>
          </main>
        </>
      ) : userLogged ? (
        <>
          <header className="mb-5 shadow">
            <Navigation />
          </header>
          <main className="w-1/2 mx-auto">
            <MainRoutes />
          </main>
        </>
      ) : null}
    </AppContext.Provider>
  );
}

export default App;
