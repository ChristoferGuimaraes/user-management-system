import React from "react";
import { Form } from "../../Form";
import { AllUsersBtn } from "../../AllUsersBtn";

export function AddUser() {
  
  return (
  
    <main id="site-main">
    <div className="container">
       <AllUsersBtn />
        <div className="form-title text-center">
            <h2 className="text-dark">New User</h2>
            <span className="text-light">
                Use the below form to create a new account
            </span>
        </div>
      <Form id={"add_user"} method="POST" action={"/api/users"}/>
    </div>
</main>
  )
  

}
