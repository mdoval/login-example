import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full w-full p-4">
      <main className="flex flex-col w-full h-full">
        <h1>Ejemplo de Login</h1>
        <hr />
        <div className="flex flex-col bg-blue-200 h-full w-full items-center justify-center">
          <Link className="btn btn-primary" href={"/login"}>Login</Link>
          <Link className="btn btn-secondary" href={"/register"}>Register</Link>
        </div>
      </main>
    </div>
  );
}
