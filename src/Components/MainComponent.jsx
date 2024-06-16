import React from "react";
import Forms from "./Forms";
import TableData from "./TableData";
import { Provider } from 'react-redux';
import { store } from "../Redux/Store";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const MainComponent = () => {
  return (
    <>
      <Provider store={store}>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

        <Forms />
        <TableData />
      </Provider>
    </>
  );
};
export default MainComponent;
