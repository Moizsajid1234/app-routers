"use client";

import Link from "next/link";
import "./home.css";
export default function Home() {
  return (
    <nav className={"navbar"}>
      <Link href="/" className={"link"}>
        Home
      </Link>
      <Link href="/about" className={"link"}>
        About
      </Link>
      <Link href="/contact" className={"link"}>
        Contact
      </Link>
      <Link href="/services" className={"link"}>
        Services
      </Link>
    </nav>
  );
}
