"use client";

import React, { useEffect, useState } from "react";
import Button from "../button";
import { Home, LogIn, LogOut, Menu, Rss, UserPlus, X } from "lucide-react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { auth } from "@/auth";
import UserButton from "./userButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useSession();

  return (
    <>
      <header className=" w-full bg-neutral-900 text-white h-24 px-10 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Blog JCDEV</h2>

        <nav className="hidden sm:flex gap-5 items-center">
          <Link className="flex gap-2 items-center" href="/">
            <Home size={15} /> Inicio
          </Link>

          <Link className="flex gap-2 items-center" href="/posts">
            <Rss size={15} />
            Feed de Posts
          </Link>

          {!data?.user ? (
            <div className="gap-4 flex ">
              <Link
                className="flex gap-2 items-center bg-neutral-200 hover:bg-opacity-70 duration-200 font-semibold text-neutral-900 p-1 rounded-md"
                href="/signIn"
              >
                Login <LogIn size={15} />
              </Link>

              <Link
                className="flex gap-2 items-center bg-neutral-500 font-semibold hover:bg-opacity-70 duration-200 text-white p-1 rounded-md"
                href="/signUp"
              >
                Cadastre-se <UserPlus size={15} />
              </Link>
            </div>
          ) : (
            <UserButton />
          )}
        </nav>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="sm:hidden z-50 bg-neutral-700 p-2 rounded-full duration-300"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </header>
      <nav
        className={`fixed h-screen w-full flex flex-col justify-center align-center ease-linear duration-300 bg-black text-white ${
          isOpen ? "top-0" : "-top-[110%] "
        }`}
      >
        <div className="flex flex-col w-11/12 mx-auto gap-2 items-center">
          <Link
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-fit"
            href="/"
          >
            <Home /> Inicio
          </Link>

          <Link
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-fit"
            href="/posts"
          >
            <Rss /> Feed de Posts
          </Link>

          {!data?.user ? (
            <>
              <Link onClick={() => setIsOpen((prev) => !prev)} href="/signIn">
                Login
              </Link>

              <Link onClick={() => setIsOpen((prev) => !prev)} href="/signUp">
                Cadastre-se
              </Link>
            </>
          ) : (
            <UserButton />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
