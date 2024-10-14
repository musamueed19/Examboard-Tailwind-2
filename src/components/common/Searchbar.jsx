import Image from "next/image";
import React from "react";

export default function Searchbar({ label }) {
  return (
    <div className="scale-75 lg:scale-100 ">
      <label className="font-bold text-lg">{label} :</label>
      <div className="border-2 border-[#909090] bg-white/60 flex items-center justify-between px-2 py-1 rounded-lg">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none bg-transparent"
        />
        <Image src="/search.svg" width={20} height={20} alt="search icon" />
      </div>
    </div>
  );
}
