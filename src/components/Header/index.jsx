import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header id="header">
      <nav>
        <div className="container">
          <div className="text-center">
            <Link to="/" className="nav-brand">
              User Management System
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
