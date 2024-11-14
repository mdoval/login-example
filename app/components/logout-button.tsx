"use client";

import { signOut } from "next-auth/react";
import React from "react";

const LogoutButton = () => {

  const handleLogout = async () => {
    await signOut(/*{redirect: true }*/)
  }

  return (
    <button className="btn btn-primary" onClick={handleLogout}>Cerrar Sesion</button>
  );
};

export default LogoutButton;
