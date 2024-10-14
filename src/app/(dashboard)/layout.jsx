"use client";

import Menubar from "@/components/Dashboard/Menubar";
import Navbar from "@/components/Dashboard/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [isHide, setIsHide] = useState(false);

  function hideTitleHandler() {
    setIsHide(!isHide);
    console.log("function", isHide);
  }

  return (
    <div className="flex w-screen h-screen gap-2">
      {/* LEFT */}
      {/* p-[0.5rem] sm:p-[0.7rem] md:p-4 lg:p-3 */}
      <div
        className={`${
          isHide ? "w-[5%]" : "w-[15%] md:w-[10%] lg:w-[18%] xl:w-[16%]"
        } bg-white rounded-xl flex flex-col gap-2 pt-4`}
      >
        <div
          className={`justify-center h-8 lg:pl-2 flex w-full items-center ${
            isHide ? "justify-center" : "lg:justify-start}"
          }`}
        >
          <Link href="/home" className="flex gap-2">
            <Image priority src="/logo.png" width={32} height={32} alt="logo" />
            <span
              className={`hidden ${
                isHide ? "hidden" : "lg:block"
              } text-[#00214f] font-bold text-[1.4rem] xl:text-2xl`}
            >
              ExamBoard
            </span>
          </Link>
        </div>
        <Menubar isHide={isHide} />
      </div>
      {/* RIGHT */}
      <div
        className={`${
          isHide ? "w-[95%]" : "w-[85%] md:w-[90%] lg:w-[84%] xl:w-[84%]"
        } flex flex-col gap-2 bg-white rounded-s-2xl`}
      >
        <Navbar hideMenu={hideTitleHandler} />

        {children}
      </div>
    </div>
  );
}
