import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteCustomer } from "../slices/customerSlice";

const CustomerView = () => {
  const customers = useSelector((state) => state.customers);
  //   const dispatch = useDispatch();

  //   function deleteHandler(index) {
  //     dispatch(deleteCustomer(index));
  //   }

  return (
    <>
      <div>
        <h3>Customer List</h3>

        <ul style={{ listStyle: "none" }}>
          {customers.map((customer) => (
            <li>
              {customer}{" "}
              {/* <button onClick={() => deleteHandler(index)}>Delete</button> */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CustomerView;
