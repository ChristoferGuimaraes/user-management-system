import React from "react";
import { Routes, Route } from "react-router-dom";

import { Users } from "../../components/pages/Users";
import { AddUser } from "../../components/pages/AddUser";
import { UpdateUser } from "../../components/pages/UpdateUser";
import { NotFound } from "../../components/pages/NotFound";

export default function Paths() {
  return (
    <Routes>
      <Route element={<Users />} path="/" />
      <Route element={<UpdateUser />} path="/update-user" />
      <Route element={<AddUser />} path="/add-user" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}
