import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateArr, updateEditIndex } from "../Redux/Slice";
import { useState, useEffect } from "react";
const TableData = () => {
  
  const state = useSelector(({ data }) => data);
  const dispatch = useDispatch();
  const handleDelete=(index)=>{
  //  console.log(index,"index");
    let tempData=state.arr?.filter((e,i)=>i!==index)
   // console.log(tempData,"deleted");
   dispatch(updateArr(tempData))

  }
  return (
    <>
      <div>TableData</div>

      <table>
        <tr>
          <th>First Name</th>
          <th>Gender</th>
          <th>Skills</th>
          <th>Date</th>
        </tr>
        {state.arr?.map((item, index) => {
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
                <td>{item?.date}</td>
                <td><button onClick={()=>{dispatch(updateEditIndex(index))}}>Edit</button></td>
                <td><button onClick={()=>{handleDelete(index)}}>Delete</button></td>
                
              </tr>
            </>
          );
        })}
      </table>
    </>
  );
};

export default TableData;
