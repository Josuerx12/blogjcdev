"use client";

import React, { useState } from "react";
import Button from "../button";
import { CircleX, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="bg-neutral-900 text-white h-24 px-10 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Blog Do JCDEV</h2>

        <nav className="hidden sm:flex gap-2 items-center">
          <Link href="/">Inicio</Link>

          <Link href="/posts">Posts</Link>

          <Button variant="neutral">
            <Link href="/signIn">Login</Link>
          </Button>
          <Button variant="primary">
            <Link href="/signUp">Cadastre-se</Link>
          </Button>
        </nav>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="sm:hidden z-50 bg-neutral-700 p-2 rounded-full duration-300 fixed right-10"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </header>
      <nav
        className={`fixed h-screen w-full flex flex-col justify-center align-center ease-linear duration-300 bg-black text-white ${
          isOpen ? "top-0" : "-top-full"
        }`}
      >
        <div className="flex flex-col w-11/12 mx-auto gap-2 items-center">
          <Link
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-fit"
            href="/"
          >
            Inicio
          </Link>

          <Link
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-fit"
            href="/posts"
          >
            Posts
          </Link>

          <Button variant="neutral">
            <Link onClick={() => setIsOpen((prev) => !prev)} href="/signIn">
              Login
            </Link>
          </Button>
          <Button variant="primary">
            <Link onClick={() => setIsOpen((prev) => !prev)} href="/signUp">
              Cadastre-se
            </Link>
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
