import { ErrorMessage, Field, Form, Formik } from "formik";
// import React,{ Component, useEffect, useState } from "react";
import React, { Component, useState } from "react";
import { useParams } from "react-router-dom";
import { ValidationSchema } from "../../../Employee_Listing/Employee_Listing_Container/Constants/Constants";

const EmployeeFormPresentation = (props: any) => {
  const initialValue = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
  };

  /** Go Back Navigation of Current Page */
  const navigateBack = () => {
    props.navigate();
  };

  /**  Update and Submit form call for  middleware*/
  const handleSubmit = (values: any) => {
    if (values.id) {
      props.update(values.id, values);
    } else {
      props.save(values);
    }
  };
  return (
    <div className="bg-gray-50 flex-grow overflow-y-auto">
      <Formik
        initialValues={props.initialValues ? props.initialValues : initialValue}
        enableReinitialize={true}
        validationSchema={ValidationSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {(formik) => {
          const { values, handleChange } = formik;
          let x, b;
          x = values.firstName;
          b = values.email;
          return (
            <Form>
              <div className="px-6 md:px-12 py-4">
                <h1 className="text-2xl font-bold">
                  {props.initialValues ? "Edit Employee" : "Create Employee"}
                </h1>
                <div className="flex flex-col md:flex-row justify-between gap-8 pt-4 w-full">
                  <section className="w-full flex flex-col gap-6">
                    {/* First Name */}
                    <div className="sm:col-span-3 form-row">
                      <label
                        htmlFor="name"
                        className="block text-base font-medium text-gray-700"
                      >
                        FirstName
                      </label>
                      <div className="mt-1">
                        <Field
                          type="text"
                          name="firstName"
                          id="firstName"
                          value={values.firstName}
                          autoComplete="given-name"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <ErrorMessage
                        name="firstName"
                        component="small"
                        className="error font-semibold text-red-500"
                      />
                    </div>
                    {/* Last Name */}
                    <div className="sm:col-span-3 form-row">
                      <label
                        htmlFor="name"
                        className="block text-base font-medium text-gray-700"
                      >
                        LastName
                      </label>
                      <div className="mt-1">
                        <Field
                          type="text"
                          name="lastName"
                          id="lastName"
                          value={values.lastName}
                          autoComplete="given-name"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <ErrorMessage
                        name="lastName"
                        component="small"
                        className="error font-semibold text-red-500"
                      />
                    </div>
                    {/* idol Username */}
                    <div className="form-row">
                      <label
                        htmlFor="description"
                        className="block text-base font-medium text-gray-700"
                      >
                        Username
                      </label>
                      <div className="mt-1">
                        <Field
                          type="text"
                          name="username"
                          id="username"
                          value={
                            props.initialValues
                              ? values.username
                              : (values.username = x)
                          }
                          onChange={handleChange}
                          disabled={values.username}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <ErrorMessage
                        name="description"
                        component="small"
                        className="error font-semibold text-red-500"
                      />
                    </div>
                    {/* bank account detail */}
                    <div className="sm:col-span-3 form-row">
                      <label
                        htmlFor="userAccountId"
                        className="block text-base font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <div className="mt-1 w-full">
                        <Field
                          type="text"
                          id="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          disabled={values.email}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        ></Field>
                      </div>
                      <ErrorMessage
                        name="email"
                        component="small"
                        className="error font-semibold text-red-500"
                      />
                    </div>
                    <div className="form-row">
                      <label
                        htmlFor="description"
                        className="block text-base font-medium text-gray-700"
                      >
                        Phone
                      </label>
                      <div className="mt-1">
                        <Field
                          type="text"
                          name="phone"
                          id="phone"
                          value={values.phone}
                          onChange={handleChange}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <ErrorMessage
                        name="phone"
                        component="small"
                        className="error font-semibold text-red-500"
                      />
                    </div>
                  </section>
                </div>
                <div className="buttons flex justify-center items-center gap-8 py-6">
                  <button
                    className="bg-white border border-black px-3 py-1"
                    type="button"
                    onClick={() => navigateBack()}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-gray-200 border border-black px-3 py-1"
                    type="submit"
                  >
                    {props.initialValues ? "Update" : "Save"}
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
const EmployeeFormFN = (props: any) => {
  return <EmployeeFormPresentation params={useParams()} {...props} />;
};

export { EmployeeFormFN as EmployeeFormPresentation };
