import React from "react";

export default function Page({ title, children }) {
  return (
    <section className="mt-5 text-white">
      <h1 className="my-5 font-semibold text-xl">{title}</h1>
      {children}
    </section>
  );
}
