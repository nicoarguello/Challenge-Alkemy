import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addBudget, findBudget } from "../redux/actions";
import swal from "sweetalert";

const Budget = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  useEffect(() => {
    dispatch(findBudget(user.id));
  }, [dispatch]);

  // const [email, setEmail] = useState('');
  const [val, setVal] = useState('');

  // const users = useSelector((store) => store.users);
  // console.log(val);

  const ChangeInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

   if(name === 'amount'){
     setVal(value)
   } 

   if(name === 'type' && value === 'Egress'){
    setVal(
      `-${val}`
    )
   }
  };

  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, e) => {
    let budget = {
      ...data,
      userId: user.id,
      amount: val
    };
    
    dispatch(addBudget(budget));
    swal({
      title: "Operation carried out successfully",
      icon: "success",
      button: "Aceptar",
      timer: "5000",
    }).then(() => {
    dispatch(findBudget(user.id));
    e.target.reset();
    reset({ data });
    setVal('')
    })
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
          <span className="err" aria-live="polite">
            {errors?.date?.message}
          </span>

          <h4 className="title_input">Amount</h4>
          <input
            className="input_form"
            name="amount"
            type="number"            
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
            className="input_form_select"
            name="type"
            type="text"
            autoComplete="off"
            //   onChange={ChangeInput}
            {...register("type", {
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

          <span className="err">{errors?.type?.message}</span>

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
          Submit
        </button>
      </form>
    </div>
  );
};

export default Budget;
