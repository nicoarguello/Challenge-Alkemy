import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../redux/actions";

const Login = () => {
    const dispatch = useDispatch();
  
    // useEffect(() => {
    // //   dispatch(findUsers());
    // }, [dispatch]);
  
    // const [email, setEmail] = useState('');
    // const [userName, setUserName] = useState('');
  
    // const users = useSelector((store) => store.users);
    // // console.log(users);
  
    const ChangeInput = (e) => {
      var value = e.target.value;
      // const name = e.target.name;
      
  
    //   for (let i = 0; i < users.length; i++) {
    //     if (value === users[i].email) {
    //        return setEmail('true');
    //     } 
    //     if (value !== users[i].email) {
    //       setEmail('');
    //     }
    //     if (value === users[i].userName) {
    //      return  setUserName('true');
    //     } 
    //     if (value !== users[i].userName) {
    //       return setUserName('');
    //     }
    //   }
    //   // console.log(error)
    //   dispatch(findUsers());
    };
  
    const {
      reset,
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
  
    const onSubmit = (data, e) => {
        console.log(data)
      dispatch(login(data));
      e.target.reset();
      reset({ data });
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