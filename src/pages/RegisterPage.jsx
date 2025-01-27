import React, { useContext } from "react";
import { register } from "../utils/network-data";
import { useNavigate } from "react-router";
import RegisterInput from "../components/RegisterInput";
import AppContext from "../contexts/AppContext";

export default function RegisterPage() {
  const { locale } = useContext(AppContext);
  const navigate = useNavigate();
  const onRegisterHandler = async (user) => {
    const req = await register(user);
    if (!req.error) {
      navigate("/");
    }
  };
  return (
    <>
      <h1 className="text-center font-semibold text-2xl mb-5">
        {locale === "id"
          ? "Daftar untuk Membuat Akun"
          : "Sign Up to Create an Account"}
      </h1>
      <RegisterInput onRegister={onRegisterHandler} />
    </>
  );
}
