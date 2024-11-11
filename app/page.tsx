import Image from "next/image";
import LoginForm from "./components/login-form";

export default function Home() {
  return (
    <div className="h-full w-full p-4">
      <main className="flex flex-col w-full h-full">
        <h1>Ejemplo de Login</h1>
        <hr />
        <div className="flex flex-col bg-blue-200 h-full w-full items-center justify-center">
          <LoginForm />
        </div>
      </main>
    </div>
  );
}
