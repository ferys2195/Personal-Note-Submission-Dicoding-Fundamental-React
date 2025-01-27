import React, { useCallback, useContext, useEffect, useState } from "react";
import useInput from "../hooks/useInput";
import { FiKey, FiMail, FiUser } from "react-icons/fi";
import { Link } from "react-router";
import PropTypes from "prop-types";
import AppContext from "../contexts/AppContext";

export default function RegisterInput({ onRegister }) {
  const { locale } = useContext(AppContext);

  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [password2, onPasswordChange2] = useInput("");

  const [isValid, setIsValid] = useState(false);

  const checkValidity = useCallback(() => {
    const valid =
      name.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== "" &&
      password2.trim() !== "" &&
      password === password2;
    setIsValid(valid);
  }, [name, email, password, password2]);

  useEffect(() => {
    checkValidity();
  }, [checkValidity]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (isValid) {
      onRegister({
        name,
        email,
        password,
      });
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label className="input input-bordered flex items-center gap-2 mb-2">
        <FiUser />
        <input
          type="text"
          value={name}
          onChange={onNameChange}
          className="grow"
          placeholder={locale === "id" ? "Nama anda" : "Your name"}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2 mb-2">
        <FiMail />
        <input
          type="email"
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
          placeholder={
            locale === "id" ? "Masukan password" : "Type your password"
          }
          className="grow"
          value={password}
          onChange={onPasswordChange}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2 mb-2">
        <FiKey />
        <input
          type="password"
          placeholder={
            locale === "id" ? "Ketik ulang password" : "Re-type your password"
          }
          className="grow"
          value={password2}
          onChange={onPasswordChange2}
        />
      </label>
      <small>
        {password2.length > 0 && password != password2
          ? locale === "id"
            ? "Password Doesn't match"
            : "Password tidak sama"
          : ""}
      </small>
      <div className="flex justify-between items-center mt-3">
        <span>
          {locale === "id"
            ? "Sudah Punya Akun ? "
            : "Already have an account ? "}
          <Link to={"/"} className="link-primary">
            {locale === "id" ? "Masuk" : "Sign in"}
          </Link>
        </span>
        <button type="submit" className="btn btn-primary" disabled={!isValid}>
          {locale === "id" ? "Daftar Sekarang" : "Sign Up Now"}
        </button>
      </div>
    </form>
  );
}

RegisterInput.propTypes = {
  onRegister: PropTypes.func.isRequired,
};
