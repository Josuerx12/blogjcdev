import { auth } from "@/auth";
import Button from "@/components/button";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <h2>Olá mundo</h2>

      <div className="flex gap-4">
        {!session?.user && (
          <>
            <Button>
              <Link href="/signIn">Fazer Login</Link>
            </Button>
            <Button variant="primary">
              <Link href="/signIn">Cadastre-se</Link>
            </Button>
          </>
        )}
      </div>
    </main>
  );
}
