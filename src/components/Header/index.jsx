import React from "react";

export function Header() {
  return (
    <header id="header">
      <nav>
        <div className="container">
          <div className="text-center">
            <a href="/" className="nav-brand text-dark">
              User Management System
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
