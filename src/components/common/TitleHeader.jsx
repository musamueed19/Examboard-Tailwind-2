import React from "react";

export default function TitleHeader({ title, fontSize = '3xl' }) {
  return (
    <div className="flex items-center justify-center">
      <h1
        className={`text-xl text-center lg:text-${fontSize} lg:text-4xl font-bold underline`}
      >
        {title}
      </h1>
    </div>
  );
}
