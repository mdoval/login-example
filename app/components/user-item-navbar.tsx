import { auth, signOut } from "@/auth";
import LoginButton from "./login-button";
import Link from "next/link";
import LogoutButton from "./logout-button";

const UserItemBar = async () => {
  const session = await auth();

  if (!session) {
    return <LoginButton />;
  }

  return (
    <div className="flex-none gap-2">
      <div className="dropdown dropdown-end">
        <span className="font-bold">{session.user.email}</span>
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <Link href="/profile" className="justify-between">
              Mi Perfil
            </Link>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserItemBar;
