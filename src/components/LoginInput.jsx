import React from "react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import { FiKey, FiLogIn, FiMail } from "react-icons/fi";
import { Link } from "react-router";

export default function LoginInput({ onLogin }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    onLogin({
      email,
      password,
    });
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <label className="input input-bordered flex items-center gap-2 mb-2">
        <FiMail />
        <input
          type="text"
          value={email}
          onChange={onEmailChange}
          className="grow"
          placeholder="Email"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2 mb-2">
        <FiKey />
        <input
          type="password"
          placeholder="Password"
          className="grow"
          value={password}
          onChange={onPasswordChange}
        />
      </label>
      <div className="flex justify-between items-center mt-3">
        <span>
          Belum Punya Akun ?{" "}
          <Link to={"/register"} className="link-primary">
            Daftar
          </Link>
        </span>
        <button type="submit" className="btn btn-primary">
          <FiLogIn /> Login
        </button>
      </div>
    </form>
  );
}

LoginInput.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
