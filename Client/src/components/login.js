import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { login, findUsers } from "../redux/actions";
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

  const users = useSelector((store) => store.users);
  // console.log(s_login.status);

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
        dispatch(login(data))
        swal({
          title: "Login succes",
          icon: "success",
          button: "Aceptar",
          timer: "5000",
        }).then(()=>{
          e.target.reset();
          reset({ data });
          window.location.replace("http://localhost:3000/home")
        })
      } else {
        swal({
          title: "Wrong username or password",
          icon: "error",
          button: "Aceptar",
          timer: "5000",
        });
      }
    }

    // dispatch(login(data))
    // console.log(user);
    // swal({
    //   title: "Los datos se modificaron con éxito!",
    //   icon: "success",
    //   button: "Aceptar",
    //   timer: "5000",
    // });
    // .then((r) => dispatch(getPais()));
    // if(s_login) {
    //   console.log(s_login)
    // } else {
    //   console.log('ERRRROOOOOOOR')
    // }
    // e.target.reset();
    // reset({ data });
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
