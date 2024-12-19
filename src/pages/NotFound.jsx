import React from "react";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex items-center justify-center flex-col text-center gap-3">
      <img src="/notfound.webp" />
      <h1 className="text-2xl sm:text-3xl font-extrabold">
        The Page is Under Development
      </h1>
      <p className="text-base lg:text-xl font-bold">
        We are working on it and will be back soon.
      </p>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="home-btn bg-[#1570EF] text-white"
      >
        Explore Home
      </button>
    </div>
  );
}
