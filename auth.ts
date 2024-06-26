import { findUserByEmail } from "@/services/auth";
import { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthConfig = {
  providers: [
    credentials({
      credentials: {
        email: {},
      },
      authorize: async (credentials, req) => {
        try {
          const user = await findUserByEmail(credentials.email as string);
          return user;
        } catch (error) {
          return null;
        }
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
  pages: {
    signIn: "/signIn",
  },
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
