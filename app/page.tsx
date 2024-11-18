import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full w-full p-4">
      <main className="flex flex-col w-full h-full">
        <div className="flex flex-col h-full w-full items-center justify-center">
          <Link className="btn btn-secondary" href={"/register"}>Registrarse</Link>
        </div>
      </main>
    </div>
  );
}
