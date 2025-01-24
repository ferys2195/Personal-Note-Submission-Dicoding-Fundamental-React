import React from "react";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { useRoutes } from "react-router";
import PropTypes from "prop-types";

export default function AuthApp({ loginSuccess }) {
  const routes = useRoutes([
    { path: "/*", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/login", element: <LoginPage /> },
  ]);
  return (
    <>
      <main className="w-1/2 mx-auto">{routes}</main>
    </>
  );
}

AuthApp.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};
