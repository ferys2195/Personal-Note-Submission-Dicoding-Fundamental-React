import React from "react";
import { register } from "../utils/network-data";
import { useNavigate } from "react-router";
import RegisterInput from "../components/RegisterInput";

export default function RegisterPage() {
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
        Registrasi Akun
      </h1>
      <RegisterInput onRegister={onRegisterHandler} />
    </>
  );
}
