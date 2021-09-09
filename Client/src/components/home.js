import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findBudget } from "../redux/actions";
import DataTable, { createTheme, Alignment } from "react-data-table-component";
import Budget from "./budget";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const budget = useSelector((store) => store.budget);
  //  console.log(budget)
  // if (budget.length > 0){
  //   for(let i=0; i < budget.date.length; i++) {
  //     budget.date[i]
  //   }
  // }
  useEffect(() => {
    dispatch(findBudget(user.id));
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
  const [pending, setPending] = React.useState(true);
  

  useEffect(() => {
    const timeout = setTimeout(() => {
      setColumns([
      
        {
          id: 2,
          name: "TYPE",
          selector: (row) => row.type,
          sortable: true,
          reorder: true,
        },
        {
          id: 3,
          name: "AMOUNT",
          selector: (row) =>'$  ' + row.amount,
          sortable: true,
          reorder: true,
          // right: true,
        },
        {
          id: 4,
          name: "DATE",
          selector: (row) => row.date,
          sortable: true,
          reorder: true,
          
        },
        {
          id: 5,
          name: "DESCRIPTION",
          selector: (row) => row.description,
          sortable: true,
          reorder: true,
        },
      ]);
      setPending(false);
      
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div>
      {user.name && user.name.length > 0 ? (
        <div>
          <h1>Welcome {user.name}</h1>

          <DataTable
            title="Virtual wallet control"
            columns={columns}
            data={budget}
            defaultSortFieldId={1}
            pagination
            selectableRows
            highlightOnHover
            fixedHeader
            theme="solarized"
            progressPending={pending}
            
            
            // className="container_register"
            // subHeaderAlign={Alignment.Center}
            // subHeader={Alignment.Center}
          />

         <Budget />
        </div>
      ) : (
        <h1>EROR</h1>
      )}
    </div>
  );
};

export default Home;
