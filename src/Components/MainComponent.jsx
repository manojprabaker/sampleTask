import React from "react";
import Forms from "./Forms";
import TableData from "./TableData";
import { Provider } from 'react-redux';
import { store } from "../Redux/Store";
const MainComponent = () => {
  return (
    <>
      <Provider store={store}>
        <Forms />
        <TableData />
      </Provider>
    </>
  );
};
export default MainComponent;
