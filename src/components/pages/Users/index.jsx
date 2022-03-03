import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../contexts/userContext";
import { AllUsersContext } from "../../../contexts/AllUsersContext";
import { FaUserEdit, FaUserMinus, FaUserAlt, FaSearch } from "react-icons/fa";
import api from "../../../services/api";
import LoadingComponent from "../../Loading/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Users() {
  const { users, setUsers } = useContext(AllUsersContext);
  const { setUserObj } = useContext(UserContext);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);

  let userId = 1;

  useEffect(() => {
    setTimeout(() => {
      getAllUsers();
    }, 1000);
  }, []);

  async function getAllUsers() {
    try {
      await api.get("/").then(({ data }) => {
        setUsers(data);
        setLoading(true);
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteUser(id) {
    if (window.confirm("Are you sure?")) {
      await api
        .delete(`/${id}`)
        .then((res) => {
          notifySuccess(res.data.message);
        })
        .catch((error) => {
          window.alert(error);
          console.log(error);
        });
      getAllUsers();
    }
  }

  function linkHandle(id) {
    return `/update-user?id=${id}`;
  }

  function getUser(user) {
    return setUserObj({
      id: user._id,
      name: user.name,
      email: user.email,
      gender: user.gender,
      status: user.status,
    });
  }

  function notifySuccess(msg) {
    return toast.success(msg, { position: "top-center", pauseOnHover: false });
  }

  return (
    <main id="site-main">
      <div className="container">
        <div className="box-nav d-flex justify-between">
          <Link id="link-tag" to="/add-user" className="border-shadow">
            <span className="text-gradient">
              <span className="new-user-icon icon-styles">
                <FaUserAlt />
              </span>
              <span>New User</span>
            </span>
          </Link>
          <div className="search-input-container border-shadow">
            <span className="search-icon icon-styles">
              <FaSearch />
            </span>
            <input
              type="text"
              className="search-input"
              placeholder="Serch..."
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>

        <form action="/" method="POST">
          {loading ? (
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
                {users
                  ?.filter((user) => {
                    return searchValue !== ""
                      ? user.name
                          .toLowerCase()
                          .includes(searchValue.toLowerCase())
                      : user;
                  })
                  .map((user) => {
                    return (
                      <tr key={user._id}>
                        <td>{userId++}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>{user.status}</td>
                        <td>
                          <Link
                            id="link-tag"
                            to={linkHandle(user._id)}
                            onClick={() => getUser(user)}
                            className="btn border-shadow update"
                          >
                            <span className="text-gradient">
                              <FaUserEdit />
                            </span>
                          </Link>
                          <Link
                            id="link-tag"
                            to={"/"}
                            className="btn border-shadow delete"
                            onClick={() => deleteUser(user._id)}
                          >
                            <span className="text-gradient ">
                              <FaUserMinus />
                            </span>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          ) : (
            <div className="text-center">
              <LoadingComponent />
            </div>
          )}
        </form>
      </div>
      <ToastContainer />
    </main>
  );
}
