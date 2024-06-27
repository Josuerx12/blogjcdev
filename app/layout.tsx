import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import ToastProvider from "@/components/providers/ToastProvider";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog do JC DEV",
  description: `Blog construido pelo Josué Carvalho, desenvolvedor fullstack, 
    esse blog foi desenvolvido em next.js! Principal objetivo é 
    publicar um pouco da minha evolução e de curiosidades sobre`,
  creator: "Josue Carvalho",
  applicationName: "Blog JCDEV",
  publisher: "Josue Carvalho",
  keywords: [
    "Next",
    "React",
    "Tailwind",
    "Social Media",
    "Redes Sociais",
    "JCDEV",
    "Blog",
    "Blogspot",
    "Desenvolvimendo",
    "Portfolio",
  ],
  category: "blog",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session} refetchOnWindowFocus>
          <Navbar />
          <ToastProvider>{children}</ToastProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
