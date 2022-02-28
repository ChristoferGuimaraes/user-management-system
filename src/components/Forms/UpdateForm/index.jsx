import React, { useState, useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import api from "../../../services/api";
import { GoAlert } from "react-icons/go";
import { RadioBtn } from "../RadioBtn";
import * as yup from "yup";
import { AllUsersContext } from "../../../contexts/AllUsersContext";

export function UpdateForm() {
  const { users } = useContext(AllUsersContext);
  const { userObj } = useContext(UserContext);
  const [name, setName] = useState(userObj.name);
  const [email, setEmail] = useState(userObj.email);
  const [gender, setGender] = useState(userObj.gender);
  const [status, setStatus] = useState(userObj.status);
  const [errors, setErrors] = useState("");
  const submitedUser = {
    name: name,
    email: email,
    gender: gender,
    status: status,
  };

  async function updateUserValue() {
    await api
      .put(`/${userObj.id}`, submitedUser)
      .then((res) => {
        window.alert(`${res.data.name} was updated succefully!`);
        setErrors("");
      })
      .catch((error) => {
        if (error.response) {
          const errorMsg = JSON.parse(error.request.response);
          window.alert(errorMsg.message);
        } else if (error.request) {
          window.alert(error.request.response.message);
          console.log(error.request.response);
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
  }

  async function submitForm(event) {
    event.preventDefault();
    try {
      let schema = yup.object().shape({
        name: yup
          .string()
          .min(3, "At least 3 characteres")
          .required("Name is required"),
        email: yup
          .string()
          .email("Enter a valid email adress")
          .required("Email is required"),
        gender: yup.string().required("Gender is required"),
        status: yup.string().required("Status is required"),
      });

      await schema.validate(submitedUser, {
        abortEarly: false,
      });

      updateUserValue();
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });
        setErrors(errorMessages);
        console.log(errorMessages);
      }
    }
  }

  function onGenderChanged(event) {
    return setGender(event.target.value);
  }

  function onStatusChanged(event) {
    return setStatus(event.target.value);
  }

  function showErrorMessage(error) {
    if (error !== undefined) {
      return (
        <span className="error-message">
          <GoAlert className="error-icon" /> {error}
        </span>
      );
    }
  }

  function validateEmail() {
    users.map((user) => {
      user.email === userObj.email ? "This email was already taken" : "";
    });
  }

  return (
    <form id="update_user" onSubmit={submitForm}>
      <div className="new_user">
        <div className="form-group">
          <label htmlFor="name" className="text-light">
            Name {showErrorMessage(errors.name)}
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
            Email {showErrorMessage(errors.email)}
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
          <RadioBtn
            id={"radio"}
            htmlFor={"radio"}
            name={"gender"}
            value={"Male"}
            nameLabel={"Male"}
            defaultChecked={userObj.gender === "Male" ? true : false}
          />
          <RadioBtn
            id={"radio-2"}
            htmlFor={"radio-2"}
            name={"gender"}
            value={"Female"}
            nameLabel={"Female"}
            defaultChecked={userObj.gender === "Female" ? true : false}
          />{" "}
          {showErrorMessage(errors.gender)}
        </div>

        <div className="form-group" onChange={(e) => onStatusChanged(e)}>
          <label htmlFor="status" className="text-light">
            Status
          </label>
          <RadioBtn
            id={"radio-3"}
            htmlFor={"radio-3"}
            name={"status"}
            value={"Active"}
            nameLabel={"Active"}
            defaultChecked={userObj.status === "Active" ? true : false}
          />
          <RadioBtn
            id={"radio-4"}
            htmlFor={"radio-4"}
            name={"status"}
            value={"Inactive"}
            nameLabel={"Inactive"}
            defaultChecked={userObj.status === "Inactive" ? true : false}
          />{" "}
          {showErrorMessage(errors.status)}
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
