import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findBudget } from "../redux/actions";
import DataTable, { createTheme, Alignment } from "react-data-table-component";
import Budget from "./budget";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const [login, setLogin] = useState(true);
  
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const simbol = "$";
  const budget = useSelector((store) => store.budget);

  useEffect(() => {
    user.id && dispatch(findBudget(user.id));
  }, []);

  createTheme("solarized", {
    text: {
      primary: "#268bd2",
      secondary: "#2aa198",
    },
    background: {
      default: "#002b36",
    },
    context: {
      background: "#cb4b16",
      text: "#FFFFFF",
    },
    divider: {
      default: "#073642",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "rgba(0,0,0,.12)",
    },
  });

  const [columns, setColumns] = useState([]);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {     
      setLogin(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [])
  useEffect(() => {
    const timeout = setTimeout(() => {
      setColumns([
        {
          id: 1,
          name: "DATE",
          selector: (row) => row.date,
          sortable: true,
          reorder: true,
          // center: true,
        },
        {
          id: 2,
          name: "AMOUNT",
          cell: (row) =>
            row.type === "Entry" ? (
              <div style={{ width: 90 }}>
                {simbol} {row.amount}
              </div>
            ) : (
              <div style={{ color: "red", width: 90 }}>
                {simbol} {row.amount}
              </div>
            ),
          sortable: true,
          reorder: true,
          // center: true,
        },
        {
          id: 3,
          name: "TYPE",
          selector: (row) => row.type,
          sortable: true,
          reorder: true,
        },
        {
          id: 4,
          name: "DESCRIPTION",
          cell: (row) => row.description,
          sortable: true,
          reorder: true,
        },
      ]);
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="homeContainer">
      {user.name && user.name.length > 0 ? (
        <div>
          <Link to="/" className="link_login">
            Logout
          </Link>
          <div>
            <h2>Welcome {user.name}</h2>

            <DataTable
              title="Virtual wallet control"
              columns={columns}
              data={budget}
              defaultSortFieldId={1}
              pagination
              selectableRows
              highlightOnHover
              responsive
              fixedHeader
              theme="solarized"
              progressPending={pending}
              className="datatable"
              // style={{width:90}}
              // subHeaderAlign={Alignment.Center}
              // subHeader={Alignment.Center}
            />

            <Budget />
          </div>
        </div>
      ) : (
        <div className='user_failed_container'>
        <h2 className='user_failed'>
          You do not have access to this site. Login with your username {" "}
          <Link to="/login" className="link_login">
            HERE
          </Link>
          . If you do not have a user, you can complete the  
          <Link to="/register" className="link_login">Registration</Link>
        </h2>
        </div>
      )}
    </div>
  );
};

export default Home;
