import React from "react";
import { Routes, Route } from "react-router-dom";

import { Users } from "../Users";
import { AddUser } from "../AddUser";
import { UpdateUser } from "../UpdateUser";

export default function Paths() {
  return (
      <Routes>
        <Route element={<Users />} path="/" />
        <Route element={<AddUser />} path="/add-user" />
        <Route element={<UpdateUser />} path="/update-user" />
        <Route element={<h1>Not Found!</h1>} path="*" />
      </Routes>
  );
}
