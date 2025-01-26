import React from "react";
import LoginInput from "../components/LoginInput";
import PropTypes from "prop-types";

export default function LoginPage({ onLogin }) {
  const handleLogin = async ({ email, password }) =>
    await onLogin({ email, password });

  return (
    <>
      <h1 className="text-center font-semibold text-2xl mb-5">Login Akun</h1>
      <LoginInput onLogin={handleLogin} />
    </>
  );
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
