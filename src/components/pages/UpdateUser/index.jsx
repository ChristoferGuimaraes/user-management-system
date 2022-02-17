import React, { useContext } from "react";
import { UpdateForm } from "../../Forms/UpdateForm";
import { AllUsersBtn } from "../../AllUsersBtn";
import { UserContext } from "../../../contexts/userContext";


export function UpdateUser() {
  const { userObj } = useContext(UserContext);
  return (
    <main id="site-main">
      <div className="container">
        <div className="box-nav d-flex justify-between">
          <div className="filter">
            <AllUsersBtn />
          </div>
        </div>
        <div className="form-title text-center">
          <h2 className="text-dark">Update User</h2>
          <span className="text-light">
            Use the below form to update an user
          </span>
        </div>
        <UpdateForm

          nameValue={userObj.name}
          emailValue={userObj.email}
          genderValue={userObj.gender}
          statusValue={userObj.status}
        />
      </div>
    </main>
  );
}
