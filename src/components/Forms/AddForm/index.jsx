import React, { useState } from "react";
import api from "../../../services/api";

export function AddForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const submitedUser = {
    name: name,
    email: email,
    gender: gender,
    status: status,
  };

  async function postUser() {
    await api
      .post("/", submitedUser)
      .then((res) => console.log(res.data))
      .catch((error) => {
        window.alert(error);
        console.log(error);
      });
  }

  function onGenderChanged(event) {
    return setGender(event.target.value);
  }

  function onStatusChanged(event) {
    return setStatus(event.target.value);
  }

  function submitForm(event) {
    event.preventDefault();

    postUser();
  }

  return (
    <form
      id="add_user"
      onSubmit={(e) => submitForm(e)}
    >
      <div className="new_user">
        <div className="form-group">
          <label htmlFor="name" className="text-light">
            Name
          </label>
          <input type="hidden" name="id" />
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="text-light">
            Email
          </label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
          />
        </div>
        <div className="form-group" onChange={(e) => onGenderChanged(e)}>
          <label htmlFor="gender" className="text-light">
            Gender
          </label>
          <div className="radio inline">
            <input type="radio" id="radio" name="gender" value="Male" />
            <label htmlFor="radio" className="radio-label">
              Male
            </label>
          </div>
          <div className="radio inline">
            <input type="radio" id="radio-2" name="gender" value="Female" />
            <label htmlFor="radio-2" className="radio-label">
              Female
            </label>
          </div>
        </div>

        <div className="form-group" onChange={(e) => onStatusChanged(e)}>
          <label htmlFor="status" className="text-light">
            Status
          </label>
          <div className="radio inline">
            <input type="radio" id="radio-3" name="status" value="Active" />
            <label htmlFor="radio-3" className="radio-label">
              Active
            </label>
          </div>
          <div className="radio inline">
            <input type="radio" id="radio-4" name="status" value="Inactive" />
            <label htmlFor="radio-4" className="radio-label">
              Inactive
            </label>
          </div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn text-dark update">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
