import PropTypes from "prop-types";
import React from "react";
import { login } from "../utils/network-data";
import Login from "../components/Login";

export default function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return <Login onLogin={onLogin} />;
}
LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};
