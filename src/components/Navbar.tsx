"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentRoute = usePathname();
  return (
    <div className="flex justify-center items-center bg-yellow-300 text-black pt-5">
      <Link
        href="/"
        className={
          currentRoute === "/"
            ? "border px-5 py-2 rounded-t-lg border-black mx-2 bg-purple-300"
            : "border px-5 py-2 rounded-t-lg border-black mx-2"
        }
      >
        {" "}
        Home{" "}
      </Link>
      <Link
        href="/menu"
        className={
          currentRoute === "/menu"
            ? "border px-5 py-2 rounded-t-lg border-black mx-2 bg-purple-300"
            : "border px-5 py-2 rounded-t-lg border-black mx-2"
        }
      >
        {" "}
        Menu{" "}
      </Link>
      <Link
        href="/contact"
        className={
          currentRoute === "/contact"
            ? "border px-5 py-2 rounded-t-lg border-black mx-2 bg-purple-300"
            : "border px-5 py-2 rounded-t-lg border-black mx-2"
        }
      >
        {" "}
        Contact Us{" "}
      </Link>
    </div>
  );
}
