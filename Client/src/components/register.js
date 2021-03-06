import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addUsers, findUsers } from "../redux/actions";
import { Link } from "react-router-dom";
import "../styles/register.css";

const Register = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findUsers());
  }, [dispatch]);

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

  const users = useSelector((store) => store.users);
  // console.log(users);

  const ChangeInput = (e) => {
    var value = e.target.value;
    // const name = e.target.name;

    for (let i = 0; i < users.length; i++) {
      if (value === users[i].email) {
        return setEmail("true");
      }
      if (value !== users[i].email) {
        setEmail("");
      }
      if (value === users[i].userName) {
        return setUserName("true");
      }
      if (value !== users[i].userName) {
        return setUserName("");
      }
    }
    // console.log(error)
    dispatch(findUsers());
  };

  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, e) => {
    dispatch(addUsers(data));
    e.target.reset();
    reset({ data });
  };

  return (
    <div className="container_register">
      <h1>Register</h1>
      <form
        className="form_register"
        onSubmit={handleSubmit(onSubmit)}
        onChange={(e) => ChangeInput(e)}
      >
        <div>
          <h4 className="title_input">Name</h4>
          <input
            className="input_form"
            name="name"
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
          <span className="err">{errors?.name?.message}</span>
          <h4 className="title_input">Last Name</h4>
          <input
            className="input_form"
            name="lastName"
            type="text"
            {...register("lastName", {
              required: {
                value: true,
                message: "Last name is required",
              },
            })}
          />
          <span className="err">{errors?.lastName?.message}</span>
          <h4 className="title_input">Email</h4>
          <input
            className="input_form"
            name="email"
            type="email"
            onChange={ChangeInput}
            required
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
            })}
          />
          <span className="err">
            {email && email.length > 0
              ? "The email has already been registered"
              : ""}
          </span>
          <span className="err">{errors?.email?.message}</span>

          <h4 className="title_input">Username</h4>
          <input
            className="input_form"
            name="userName"
            type="text"
            autoComplete="off"
            onChange={ChangeInput}
            {...register("userName", {
              required: {
                value: true,
                message: "User Name is required",
              },
            })}
          />
          <span className="err">
            {userName && "Username is already in use"}
          </span>
          <span className="err">{errors?.userName?.message}</span>
          <h4 className="title_input">Password</h4>
          <input
            className="input_form"
            name="password"
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
          />
          <span className="err">{errors?.password?.message}</span>
        </div>
        <button type="submit" className="button_register">
          Subscribe
        </button>
      </form>
      <p className="register_text">
        If you are already registered, enter{" "}
        <Link to="/login" className="link_login">
          HERE
        </Link>
      </p>
    </div>
  );
};

export default Register;
