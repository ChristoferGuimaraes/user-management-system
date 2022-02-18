import React, { useState, useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import api from "../../../services/api";

export function UpdateForm() {
  const { userObj } = useContext(UserContext);
  const [name, setName] = useState(userObj.name);
  const [email, setEmail] = useState(userObj.email);
  const [gender, setGender] = useState(userObj.gender);
  const [status, setStatus] = useState(userObj.status);

  async function updateUserValue() {
    const submitedUser = {
      name: name,
      email: email,
      gender: gender,
      status: status,
    };

    await api
      .put(`/${userObj.id}`, submitedUser)
      .then((res) => window.alert(`${res.data.name} was updated succefully!`))
      .catch((error) => {
        window.alert(error);
        console.log(error);
      });
  }

  function submitForm(event) {
    event.preventDefault();
    updateUserValue();
  }

  function onGenderChanged(event) {
    return setGender(event.target.value);
  }

  function onStatusChanged(event) {
    return setStatus(event.target.value);
  }

  return (
    <form id="update_user" onSubmit={submitForm}>
      <div className="new_user">
        <div className="form-group">
          <label htmlFor="name" className="text-light">
            Name
          </label>
          <input type="hidden" name="id" />
          <input
            type="text"
            name="name"
            defaultValue={userObj.name}
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
            defaultValue={userObj.email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
          />
        </div>
        <div className="form-group" onChange={(e) => onGenderChanged(e)}>
          <label htmlFor="gender" className="text-light">
            Gender
          </label>
          <div className="radio inline">
            <input
              type="radio"
              id="radio"
              name="gender"
              value="Male"
              defaultChecked={userObj.gender === "Male" ? true : false}
            />
            <label htmlFor="radio" className="radio-label">
              Male
            </label>
          </div>
          <div className="radio inline">
            <input
              type="radio"
              id="radio-2"
              name="gender"
              value="Female"
              defaultChecked={userObj.gender === "Female" ? true : false}
            />
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
            <input
              type="radio"
              id="radio-3"
              name="status"
              value="Active"
              defaultChecked={userObj.status === "Active" ? true : false}
            />
            <label htmlFor="radio-3" className="radio-label">
              Active
            </label>
          </div>
          <div className="radio inline">
            <input
              type="radio"
              id="radio-4"
              name="status"
              value="Inactive"
              defaultChecked={userObj.status === "Inactive" ? true : false}
            />
            <label htmlFor="radio-4" className="radio-label">
              Inactive
            </label>
          </div>
        </div>

        <div className="form-group">
          <button
            type="submit"
            className="btn text-dark update"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
