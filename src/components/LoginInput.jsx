import React, { useContext } from "react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import { FiKey, FiLogIn, FiMail } from "react-icons/fi";
import { Link } from "react-router";
import AppContext from "../contexts/AppContext";

export default function LoginInput({ onLogin }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const { locale } = useContext(AppContext);

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
          {locale === "id" ? "Belum Punya Akun ? " : "Don't have an account ? "}
          <Link to={"/register"} className="link-primary">
            {locale === "id" ? "Daftar" : "Sign Up"}
          </Link>
        </span>
        <button type="submit" className="btn btn-primary">
          <FiLogIn /> {locale === "id" ? "Masuk Sekarang" : "Sign In Now"}
        </button>
      </div>
    </form>
  );
}

LoginInput.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
