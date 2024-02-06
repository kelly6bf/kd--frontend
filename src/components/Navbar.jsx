import React from "react";
import {Link} from "react-router-dom";
import {VscNotebook} from "react-icons/vsc";
import {BsPencil} from "react-icons/bs";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-4 py-4 border-b border-gray-300">
      <Link to="/" className="flex items-center gap-2 m-auto text-4xl font-bold text-brand">
        <VscNotebook />
        <h1>Kelly's Day</h1>
      </Link>
      <nav className="flex items-center space-x-4 text-xl font-semibold">
        <Link to={"/diaries/new"}>
          <BsPencil/>
        </Link>
        <Link to="/diaries/me">
          My Page
        </Link>
        <Link to="/login">
          Login
        </Link>
      </nav>
    </header>
  );
}
