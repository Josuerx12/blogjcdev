import { db } from "@/providers/db";
import { compare } from "bcrypt";
import { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      authorize: async (credentials, req) => {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error("Nenhuma credencial informada");
        }

        const userFromDB = await db.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        });

        if (!userFromDB) {
          throw new Error("Nenhuma conta encontrada para o e-mail informado!");
        }

        const verifiedUser = await compare(
          credentials.password as string,
          userFromDB.password
        );

        if (!verifiedUser) {
          throw new Error("Credenciais não concidem!");
        }

        const user = await db.user.findUnique({
          where: {
            id: userFromDB.id,
          },
          select: {
            id: true,
            email: true,
            name: true,
            lastName: true,
            createdAt: true,
            role: true,
            updatedAt: true,
          },
        });

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const { auth, handlers, signIn, signOut } = NextAuth(authOptions);
