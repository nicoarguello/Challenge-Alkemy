import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import "../styles/register.css";
import { addUsers } from "../redux/actions";

const Register = () => {
  const dispatch = useDispatch();

  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, e) => {
    dispatch(addUsers(data))
    e.target.reset();
    reset({ data });
  };

  return (
    <div className="container_register">
      <h1>Register</h1>
      <form className="form_register" onSubmit={handleSubmit(onSubmit)}>
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
            type='text'
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
            type='email'
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
            })}
          />
          <span className="err">{errors?.email?.message}</span>
   
          <h4 className="title_input">Username</h4>
          <input
            className="input_form"
            name="userName"
            type='text'
            autoComplete='off'
            {...register("userName", {
              required: {
                value: true,
                message: "User Name is required",
              },
            })}
          />
          <span className="err">{errors?.userName?.message}</span>
          <h4 className="title_input">Password</h4>
          <input
            className="input_form"
            name="password"
            type='password'
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
    </div>
  );
};

export default Register;
