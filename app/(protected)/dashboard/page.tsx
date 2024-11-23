import LogoutButton from "@/app/components/logout-button";
import { auth } from "@/auth";

export default async function DashboardPage() {
  /*const session = await auth();

  if (!session) {
    return <div>Usuario no autorizado para ver esta seccion</div>;
  }

  if (session.user.role === "admin") {
    return (
      <div className="container">
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <LogoutButton />
      </div>
    );
  } else {
    return (
      <div className="container">
        <h1>Usuario no es administrador</h1>
        <LogoutButton />
      </div>
    );
  }*/
 return(
  <div>
    <h1>Pagina Dashboard</h1>
  </div>
 )
}
