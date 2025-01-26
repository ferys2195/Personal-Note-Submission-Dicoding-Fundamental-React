import React, { useContext } from "react";
import LoginInput from "../components/LoginInput";
import PropTypes from "prop-types";
import AppContext from "../contexts/AppContext";

export default function LoginPage({ onLogin }) {
  const { locale } = useContext(AppContext);
  const handleLogin = async ({ email, password }) =>
    await onLogin({ email, password });

  return (
    <>
      <h1 className="text-center font-semibold text-2xl mb-5">
        {locale === "id" ? "Masuk ke Akun Anda" : "Sign In to Your Account"}
      </h1>
      <LoginInput onLogin={handleLogin} />
    </>
  );
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
