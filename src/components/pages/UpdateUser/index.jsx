import React from "react";
import { Form } from "../../Form";
import { AllUsersBtn } from "../../AllUsersBtn";

export function UpdateUser() {
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
        <Form id={"update_user"} method={"POST"} />
      </div>
    </main>
  );
}
