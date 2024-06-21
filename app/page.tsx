import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2>Olá mundo</h2>

      <div className="flex gap-4">
        <Button>
          <Link href="/signIn">Fazer Login</Link>
        </Button>
        <Button variant="primary">
          <Link href="/signIn">Cadastre-se</Link>
        </Button>
        <Button variant="neutral">
          <Link href="/signIn">Sair</Link>
        </Button>
        <Button variant="danger">
          <Link href="/signIn">Deletar</Link>
        </Button>
      </div>
    </main>
  );
}
