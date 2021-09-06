import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { login, findUsers, findOneUser } from "../redux/actions";
import swal from "sweetalert";

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findUsers());
  }, [dispatch]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let history = useHistory();

  const users = useSelector((store) => store.users);
  var state_login = useSelector((store) => store.state_login);

  const ChangeInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === "email") {
      setUser({
        ...user,
        [name]: value,
      });
    }
    if (name === "password") {
      setUser({
        ...user,
        [name]: value,
      });
    }
  };

  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, e) => {
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].email === user.email &&
        users[i].password === user.password
      ) {
        dispatch(login(data));
        // history.push(`http://localhost:3000/home?${users[i].userName}`);
        swal({
          title: "Login succes",
          icon: "success",
          button: "Aceptar",
          timer: "5000",
        }).then(() => {
          e.target.reset();
          reset({ data });
          state_login = users[i].userName
          
          window.location.replace(
            `http://localhost:3000/${users[i].userName}`
            );
            dispatch(findOneUser(users[i].userName))
        });
      } else {
        swal({
          title: "Wrong username or password",
          icon: "error",
          button: "Aceptar",
          timer: "5000",
        });
      }
    }
  };

  return (
    <div className="container_register">
      <h1>Login</h1>
      <form
        className="form_register"
        onSubmit={handleSubmit(onSubmit)}
        onChange={(e) => ChangeInput(e)}
      >
        <div>
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
          <span className="err">{errors?.email?.message}</span>

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
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
