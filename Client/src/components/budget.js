import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

const Budget = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
    //   dispatch(findUsers());
    }, [dispatch]);
  
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
    //   dispatch(addUsers(data));
      e.target.reset();
      reset({ data });
    };
  
    return (
      <div className="container_register">
        <h1>Budget</h1>
        <form
          className="form_register"
          onSubmit={handleSubmit(onSubmit)}
          onChange={(e) => ChangeInput(e)}
        >
          <div>
            <h4 className="title_input">Date</h4>
            <input
              className="input_form"
              name="date"
              type="date"
              {...register("date", {
                required: {
                  value: true,
                  message: "Date is required",
                },
              })}
            />
            <span className="err" aria-live="polite">{errors?.date?.message}</span>
            
            <h4 className="title_input">Amount</h4>
            <input
              className="input_form"
              name="amount"
              type="cc-type"
              onChange={ChangeInput}
              required
              aria-required="true"
              message="ddddddddddddddd"
              {...register("amount", {
                required: {
                  value: true,
                  message: "Amount is required",
                },
              })}
            />
           
            <span className="err">{errors?.amount?.message}</span>
  
            <h4 className="title_input">Type</h4>
            <select
              className="input_form"
              name="userName"
              type="text"
              autoComplete="off"
              onChange={ChangeInput}
              {...register("userName", {
                required: {
                  value: true,
                  message: "You must select an option",
                },
              })}
            >
                <option></option>
                <option>Entry</option>
                <option>Egress</option>
            </select>
            
            <span className="err">{errors?.userName?.message}</span>
            
            <h4 className="title_input">Description</h4>
            <input
              className="input_form"
              name="description"
              type="text"
              {...register("description", {
                required: {
                  value: true,
                  message: "Description is required",
                },
              })}
            />
            <span className="err">{errors?.description?.message}</span>
            
          </div>
          <button type="submit" className="button_register">
            Subscribe
          </button>
        </form>
      </div>
    );
  };
  
  export default Budget;