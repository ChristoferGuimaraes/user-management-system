import React from "react";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

export function AllUsersBtn() {
  return (
    <div className="box-nav d-flex justify-between">
      <div className="filter">
        <Link to="/">
          <TiArrowBack /> All Users
        </Link>
      </div>
    </div>
  );
}
