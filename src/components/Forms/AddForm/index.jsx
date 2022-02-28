import React, { useState } from "react";
import api from "../../../services/api";
import { RadioBtn } from "../RadioBtn";
import { GoAlert } from "react-icons/go";
import * as yup from "yup";

export function AddForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState("");
  const submitedUser = {
    name: name,
    email: email,
    gender: gender,
    status: status,
  };

  async function postUser() {
    await api
      .post("/", submitedUser)
      .then((res) => {
        res.data;
        setErrors("");
        window.alert("User added succefully!")
      })
      .catch((error) => {
        if (error.response) {
          const errorMsg = JSON.parse(error.request.response)
          window.alert(errorMsg.message);
        } else if (error.request) {
          window.alert(error.request.response.message);
          console.log(error.request.response);
        } else {
          console.log("Error", error.message);
        }
      });
  }

  function onGenderChanged(event) {
    return setGender(event.target.value);
  }

  function onStatusChanged(event) {
    return setStatus(event.target.value);
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

      postUser();
      //onBtnClicked();
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });
        setErrors(errorMessages);
      }
    }
  }

  //function onBtnClicked() {
  //  return (window.location.href = "/");
  //}

  function showErrorMessage(error) {
    if (error !== undefined) {
      return (
        <span className="error-message">
          <GoAlert className="error-icon" /> {error}
        </span>
      );
    }
  }

  return (
    <>
      <form id="add_user" onSubmit={(e) => submitForm(e)}>
        <div className="new_user">
          <div className="form-group">
            <label htmlFor="name" className="text-light ">
              Name {showErrorMessage(errors.name)}
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
            <label htmlFor="email" className="text-light ">
              Email {showErrorMessage(errors.email)}
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
            <RadioBtn
              id={"radio"}
              htmlFor={"radio"}
              name={"gender"}
              value={"Male"}
              nameLabel={"Male"}
            />
            <RadioBtn
              id={"radio-2"}
              htmlFor={"radio-2"}
              name={"gender"}
              value={"Female"}
              nameLabel={"Female"}
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
            />
            <RadioBtn
              id={"radio-4"}
              htmlFor={"radio-4"}
              name={"status"}
              value={"Inactive"}
              nameLabel={"Inactive"}
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
    </>
  );
}
