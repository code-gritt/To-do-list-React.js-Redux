import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomer as addCustomerAction } from "../slices/customerSlice";

const CustomerAdd = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  // const [customers, setCustomers] = useState([]);

  function addCustomer() {
    if (input) {
      // setCustomers((previousState) => [...previousState, input]);
      dispatch(addCustomerAction(input));
      setInput("");
      console.log(customers);
    }
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h3>Add New Customer</h3>

        <TextField
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          variant="standard"
        />

        <Button onClick={addCustomer} variant="contained">
          Add
        </Button>
      </div>
    </>
  );
};

export default CustomerAdd;
