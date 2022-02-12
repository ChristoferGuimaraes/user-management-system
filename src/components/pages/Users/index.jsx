import React, { useEffect, useState } from "react";
import { FaUserEdit, FaUserMinus } from "react-icons/fa";
import api from "../../../services/api";

export function Users() {
  const [users, setUsers] = useState([]);
  let userId = 1;

  useEffect(() => {
    api.get("/").then(({ data }) => {
      setUsers(data);
    });
  }, []);

  function linkHandle(id) {
    return `/update-user?id=${id}`;
  }


  return (
    <main id="site-main">
      <div className="container">
        <div className="box-nav d-flex justify-between">
          <a href="/add-user" className="border-shadow">
            <span className="text-gradient">
              New User <i className="fas fa-user"></i>
            </span>
          </a>
        </div>

        <form action="/" method="POST">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>@Email</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => {
                return (
                  <tr key={user._id}>
                    <td>{userId++}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.status}</td>
                    <td>
                      <a
                        href={linkHandle(user._id)}
                        className="btn border-shadow update"
                      >
                        <span className="text-gradient">
                          <FaUserEdit />
                        </span>
                      </a>
                      <a className="btn border-shadow delete">
                        <span className="text-gradient">
                          <FaUserMinus />
                        </span>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </form>
      </div>
    </main>
  );
}
