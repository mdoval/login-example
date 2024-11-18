import Link from "next/link";
import React from "react";
import UserItemBar from "./user-item-navbar";

const MainNavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-xl">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Login Example</a>
      </div>
      <UserItemBar />
    </div>
  );
};

export default MainNavBar;
