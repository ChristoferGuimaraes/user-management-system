import React from "react";
import { FaUserEdit, FaUserMinus } from "react-icons/fa";

export function Users() {
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
              <tr>
                <td>1</td>
                <td>Christofer Guimarães</td>
                <td>exemple@gmail.com</td>
                <td>Male</td>
                <td>Inactive</td>
                <td>
                  <a href="/update-user" className="btn border-shadow update">
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
            </tbody>
          </table>
        </form>
      </div>
    </main>
  );
}
