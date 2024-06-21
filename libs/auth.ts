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
          throw new Error("Missing credentials");
        }

        const userFromDB = await db.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        });

        if (!userFromDB) {
          throw new Error("User not found");
        }

        const verifiedUser = await compare(
          credentials.password as string,
          userFromDB.password
        );

        if (!verifiedUser) {
          throw new Error("Invalid password");
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

  callbacks: {
    jwt({ user, token }) {
      if (user) {
        token.email = user.email as string;
        token.name = user.name as string;
        token.role = user.role;
        token.lastName = user.lastName;
        token.id = user.id as string;
      }

      return token;
    },
    session({ token, session }) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.lastName = token.lastName;
      session.user.email = token.email;
      session.user.role = token.role;

      return session;
    },
  },
};

export const { auth, handlers, signIn, signOut } = NextAuth(authOptions);
