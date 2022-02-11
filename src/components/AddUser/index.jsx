import React from "react";
import { Form } from "../Form";

export function AddUser() {
  
  return (
  
    <main id="site-main">
    <div className="container">
        <div className="box-nav d-flex justify-between">
            <div className="filter">
                <a href="/"><i className="fas fa-angle-double-left"></i>All Users</a>
            </div>
        </div>
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
