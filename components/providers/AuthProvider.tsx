"use client";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { AppContext } from "next/app";
import React, { ReactNode } from "react";

const AuthProvider = ({
  children,
  session,
}: {
  children: ReactNode;
  session: any;
}) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
