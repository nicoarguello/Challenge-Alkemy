import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findBudget } from "../redux/actions";
import Budget from "./budget";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)
     

  useEffect((didUpdate) => {
    dispatch(findBudget(user.id));
  }, []);

//   componentDidMount() {
//     dispatch(findBudget(user.id));
//   }
  const budget = useSelector((store) => store.budget);
//   console.log(budget, user);




  return (
    <div>
      {user.name && user.name.length > 0 ? (
        <div>
          <h1>Welcome {user.name}</h1>
          <Budget />
        </div>
      ) : (
        <h1>EROR</h1>
      )}
    </div>
  );
};

export default Home;
