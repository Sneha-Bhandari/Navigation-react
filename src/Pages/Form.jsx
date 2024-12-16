import { Formik, Form, Field } from "formik";
import React from "react";
import { useState } from "react";

const Forms = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const form = [
    {
      name: "Username",
      type: "text",
      placeholder: "enter your username",
    },
    {
      name: "Password",
      type: "password",
      placeholder: "enter your password",
    },
    {
      name: "Address",
      type: "text",
      placeholder: "enter your address",
    },
  ];

  function Submit1() {
    alert(username + " " + password + " " + address);
  }

  return (
    <div className="flex flex-col gap-1 items-center justify-center h-lvh ">
      {/* <div>
        {
          form.map((val,i)=>{
            return (
              <div key={i}>
                {val.name}
              </div>
            )
          })
        }
      </div> */}

      <Formik  >
        <Form className="w-1/2 h-1/2 rounded-3xl flex flex-col items-center justify-center bg-gradient-to-t from-blue-400 to-yellow-200">
          <div>
            <h1 className="font-medium text-3xl">Login</h1>
          </div>
          <div className="  flex flex-col gap-8  rounded-md">
          <div className=" flex flex-col w-full gap-2  ">
            {form.map((val, i) => {
              return (
                <div key={i} className="flex flex-col gap-2">
                  {val.name}
                  <Field className="outline-none border w-full " type={val.type} placeholder={val.placeholder} />
                </div>
              );
            })}
            </div>
          <button type="submit" className="bg-red-200 w-fit px-2 py-2 font-semibold rounded-lg  ">Submit </button>

          </div>
        </Form>
      </Formik>





      {/* <div className=" border w-4/12 rounded-xl  shadow-xl flex flex-col  h-auto p-8 gap-5 ">
        <div className="text-3xl font-semibold w-full">
          <h1 className="">Login Here!!</h1>
        </div>
        <div className="flex  w-full flex-col gap-2">
          <h1>Username:</h1>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            placeholder="Enter your name"
            className="bg-gray-300 py-3 rounded-md bg-transparent border outline-none border-gray-300 px-4 border-b  "
          />
        </div>

        <div className="flex w-full  flex-col gap-2">
          <h1>Password:</h1>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            placeholder="Enter your password"
            className="bg-gray-300 py-3 rounded-md bg-transparent border outline-none border-gray-300 px-4 border-b"
          />
        </div>

        <div className=" gap-2 w-full  flex-col flex">
          <h1>Address:</h1>
          <input
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            type="text"
            name="address"
            placeholder="Enter your address"
            className="bg-gray-300 py-3 rounded-md bg-transparent border outline-none border-gray-300 px-4 border-b"
          />
        </div>

        <button
          onClick={() => Submit1()}
          className="w-fit h-fit shadow-md px-10 py-2 bg-green-500 rounded-md text-white"
        >
          Submit
        </button>
      </div> */}
    </div>
  );
};

export default Forms;
