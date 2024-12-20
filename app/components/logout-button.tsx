"use client";

import { signOut } from "next-auth/react";
import React from "react";

const LogoutButton = () => {

  const handleLogout = async () => {
    await signOut({redirectTo: "/"})
  }

  return (
    <button onClick={handleLogout}>Cerrar Sesion</button>
  );
};

export default LogoutButton;
