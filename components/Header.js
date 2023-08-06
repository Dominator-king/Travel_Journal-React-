import React from "react";

export default function Header() {
  return (
    <div className="w-screen bg-[#F55A5A] justify-center flex gap-x-2 text-white tracking-tighter text-sm py-5">
      {" "}
      <img src="./images/world.png" alt="img" />
      <p>my travel journal.</p>
    </div>
  );
}
