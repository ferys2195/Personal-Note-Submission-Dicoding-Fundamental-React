import React from "react";
import { Route, Routes } from "react-router";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PropTypes from "prop-types";

export default function AuthRoutes({ handleLogin }) {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<LoginPage onLogin={handleLogin} />} />
    </Routes>
  );
}

AuthRoutes.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};
