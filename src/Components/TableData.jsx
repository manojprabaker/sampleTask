import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateArr, updateEditIndex } from "../Redux/Slice";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const TableData = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const state = useSelector(({ data }) => data);
  const dispatch = useDispatch();
  const iconsSuccess = (message) =>
    toast.success(
      <p className="mx-2 tx-16 d-flex align-items-center mb-0 ">{message}</p>
    );
  const handleDelete = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6 ",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        let tempData = state.arr?.filter((e, i) => i !== index);
        dispatch(updateArr(tempData));
        iconsSuccess('Record deleted successfully')
      }
    });
  };
  let dateFormatFn = (str) => {
    const date = new Date(str);
    let currDate = date.getDate();
    let currMonth = months[date.getMonth()];
    let currYear = date.getFullYear();
    return `${currDate} ${currMonth} ${currYear}`;
  };


  return (
    <>
      <div className="container">
     
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Skills</th>
              <th scope="col">Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {state?.arr?.length !== 0 ? (
              state.arr?.map((item, index) => {
                return (
                  <>
                    <tr>
                      <td>{item?.firstName}</td>
                      <td>{item?.gender}</td>
                      <td>
                        {item?.skills?.map((skills, index) => {
                          return <>{skills}</>;
                        })}
                      </td>
                      <td>{dateFormatFn(item?.date)}</td>
                      <td>
                        <button
                          className="btn btn-secondary"
                          onClick={() => {
                            dispatch(updateEditIndex(index));
                          }}
                        >
                          Edit
                        </button>{" "}
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            handleDelete(index);
                          }}
                        >
                          Delete
                        </button>
                      
                      </td>
                    </tr>
                  </>
                );
              })
            ) : (
              <>
                <tr className="text-center fs-2">
                  <td colSpan={5}>No records to Display </td>
                </tr>
              </>
            )}
            {}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableData;
