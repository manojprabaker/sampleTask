import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useSelector, useDispatch } from "react-redux";
import { updateArr, updateEditIndex } from "../Redux/Slice";

const Forms = () => {
  const initalValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    jobRole: "",
    about: "",
    gender: "",
    skills: [],
    date: new Date(),
  };
  let savedValues = {
    firstName: "Manoj",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    jobRole: "qa",
    about: "HAHHA",
    gender: "male",
    skills: ["angularjs", "reactjs"],
    date: "Mon Jun 17 2024 22:06:17 GMT+0530 (India Standard Time)",
  };
  const [editData, setEditData] = useState(null);
  const dispatch = useDispatch();
  const [formValues, setformValues] = useState([]);
  const state = useSelector(({ data }) => data);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    if(state?.editIndex===null)
      {
       // console.log(values, "answer");
        values.date = values?.date.toString();
        let updatedTasks = state.arr;
        // console.log(updatedTasks,"redux");
        let tempData = [...updatedTasks, values];
    
        resetForm();
        dispatch(updateArr(tempData));
      }
      else{
        values.date = values?.date.toString();
       // console.log(values, "edited answer");
       
        let tempData=state.arr
       // tempData[state?.editIndex]=values;
      // console.log(tempData[state?.editIndex],"edit edit");
     //  console.log(tempData,"array");
       let newTempData=tempData?.map((item,index)=> index===state?.editIndex ?values :item)
     //  console.log(newTempData,"new DATATATTATA");
      // resetForm();
       dispatch(updateArr(newTempData));
       dispatch(updateEditIndex(null))
       setEditData(initalValues)
      }
    
  };

  useEffect(() => {
    if(state?.editIndex!==null)
      {
    // console.log(
    //   state?.arr[state?.editIndex],
    //   state?.editIndex,
    //   "edited Values"
    // );
    setEditData(state?.arr[state?.editIndex]);
  }
  }, [state?.editIndex]);
  return (
    <div className="container">
      <div className="row justify-content-center signup-form">
        <div className="col-xs-12 col-sm-12 col-md-6  ">
          <Formik
            initialValues={editData || initalValues}
            enableReinitialize
            validationSchema={Yup.object({
              firstName: Yup.string().required("Required"),
              lastName: Yup.string().required("Required"),
              email: Yup.string()
                .email("Invalid email")
                .required("Please Enter your Email"),
              password: Yup.string()
                .matches(
                  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,}$/,
                  "Password must containe minimum 8 characters, at least one letter and one number"
                )
                .required("Please Enter Password"),
              confirmPassword: Yup.string()
                .required("Please enter confirm password")
                .oneOf([Yup.ref("password"), null], "Password did not match"),
              jobRole: Yup.string()
                .oneOf(["dev", "des", "qa"])
                .required("Please Select Job Role"),
              gender: Yup.string().required("Please Select Gender"),
              about: Yup.string()
                .max(200, "Must be less than 200")
                .required("Please Enter Details"),
              skills: Yup.array().min(1, "Please Select anyone"),
            })}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, values, setFieldValue }) => (
              <>
                <Form>
                  <div className="row">
                    <div className="col-md-6">
                      <Field
                        className="form-control"
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                      />
                      <ErrorMessage
                        component="label"
                        className="form-label text-danger"
                        name="firstName"
                      />
                    </div>
                    <div className="col-md-6">
                      <Field
                        className="form-control"
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                      />
                      <ErrorMessage
                        component="label"
                        className="form-label text-danger"
                        name="lastName"
                      />
                    </div>
                  </div>
                  <Field
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    type="email"
                  />
                  <ErrorMessage
                    component="label"
                    className="form-label text-danger"
                    name="email"
                  />
                  <Field
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                  <ErrorMessage
                    component="label"
                    className="form-label text-danger"
                    name="password"
                  />
                  <Field
                    className="form-control"
                    name="confirmPassword"
                    placeholder="Confirm
Password"
                    type="password"
                  />
                  <ErrorMessage
                    component="label"
                    className="form-label text-danger"
                    name="confirmPassword"
                  />
                  <Field
                    as="select"
                    name="jobRole"
                    className="form-control"
                    style={{ marginTop: "6px" }}
                  >
                    <option value="" disabled>
                      Job Role
                    </option>
                    <option value="dev">Developer</option>
                    <option value="des">Designer</option>
                    <option value="qa">Quality Analyst</option>
                  </Field>
                  <ErrorMessage
                    component="label"
                    className="form-label text-danger"
                    name="jobRole"
                  />
                  <div className="col-md-6">
                    <label className="form-label">Gender</label>
                  </div>
                  <div className="col-md-7">
                    <label className="radio-inline cursor-pointer">
                      <Field
                        type="radio"
                        name="gender"
                        id="inlineCheckbox1"
                        value="male"
                      />
                      &nbsp; Male
                    </label>
                    &nbsp;&nbsp;&nbsp;
                    <label className="radio-inline cursor-pointer">
                      <Field
                        type="radio"
                        name="gender"
                        id="inlineCheckbox2"
                        value="female"
                      />
                      &nbsp; Female
                    </label>
                  </div>
                  <ErrorMessage
                    component="label"
                    className="form-label text-danger"
                    name="gender"
                  />
                  <Field
                    as="textarea"
                    name="about"
                    className="form-control"
                    placeholder="Write something about you"
                    id="floatingTextarea"
                  />
                  <ErrorMessage
                    component="label"
                    className="form-label text-danger"
                    name="about"
                  />
                  <div className="col-md-6">
                    <label className="form-label">Skills</label>
                  </div>

                  <div className="d-flex">
                    <div className="form-check form-check-inline">
                      <Field
                        className="form-check-input"
                        type="checkbox"
                        id="node"
                        name="skills"
                        value="nodejs"
                      />
                      <label
                        className="form-check-label cursor-pointer"
                        htmlFor="node"
                      >
                        NodeJS
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <Field
                        className="form-check-input"
                        type="checkbox"
                        id="react"
                        name="skills"
                        value="reactjs"
                      />
                      <label
                        className="form-check-label cursor-pointer"
                        htmlFor="react"
                      >
                        ReactJS
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <Field
                        className="form-check-input"
                        type="checkbox"
                        id="react"
                        name="skills"
                        value="angularjs"
                      />
                      <label
                        className="form-check-label cursor-pointer"
                        htmlFor="react"
                      >
                        Angular
                      </label>
                    </div>
                  </div>
                  <ErrorMessage
                    component="label"
                    className="form-label text-danger"
                    name="skills"
                  />

                  <DatePicker
                    name="date"
                    dateFormat="MMMM d, yyyy"
                    selected={values?.date}
                    onChange={(date) => setFieldValue("date", date)}
                  />

                  <button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                  >
                    Sign up
                  </button>

                  {/* <div>
                    <button
                      type="button"
                      onClick={() => {
                        setEditData(savedValues);
                      }}
                    >
                      Edit
                    </button>
                  </div> */}
                  <div>
                    <button type="reset">Reset</button>
                  </div>
                </Form>
              </>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Forms;
