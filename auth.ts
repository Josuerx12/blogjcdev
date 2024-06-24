import { findUserByEmail } from "@/services/auth";
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
        console.log(credentials.email);

        const user = await findUserByEmail(credentials.email as string);
        return user;
      },
    }),
  ],
};

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authOptions,
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
});
