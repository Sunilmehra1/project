import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [input, setinput] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    retype: "",
    id   : new Date().getUTCMilliseconds()
  });
  const handlechange = (e) => {
    setinput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = (e) => {
    setinput("")
    e.preventDefault();
    let useralreadyexist  = localStorage?.getItem('users') ? JSON.parse(localStorage?.getItem('users')) : [];
    console.log(useralreadyexist)
    let user = useralreadyexist?.find(data => data.email === input.email);
    
    if(user){
    alert('user already exist')
    }  else  if(localStorage.getItem('users')){
    let user =  JSON.parse(localStorage.getItem('users'));
      localStorage.setItem('users', JSON.stringify([...user , input]))
    }else{
     let user = input;
     localStorage.setItem('users' ,JSON.stringify([user]))
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-[100vh]  text-black mt-2 bg-blue-900 p-3 capitalize flex-col">
        <div className="flex flex-col bg-white w-[30%] h-[80vh] space-y-5 items-center  p-3 rounded-sm">
          <div className="text-center text-3xl "> Sign up</div>

          <form
            className="flex flex-col space-y-6 items-center w-[100%]"
            onSubmit={handlesubmit}
          >
            <div className="flex  flex-col gap-3 w-[100%]">
              <label>Name:</label>
              <input
                type="name"
                name="name"
                value={input.name}
                onChange={handlechange}
                className="w-[100%] border border-black bg-white py-2 px-1 rounded"
              />
            </div>
            <div className="flex  flex-col gap-3 w-[100%]">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={handlechange}  className="w-[100%] border border-black bg-white py-2 px-1"
              />
            </div>
            <div className="flex  flex-col gap-3 w-[100%]">
              <label>Contact:</label>
              <input
                type="contact"
                name="contact"
                value={input.contact}
                onChange={handlechange}
                className="w-[100%] border border-black bg-white py-2 px-1 rounded"
              />
            </div>
            <div className="flex  flex-col gap-3 w-[100%]">
              <label>password:</label>
              <input
                type="password"
                name="password"
                value={input.password}
                onChange={handlechange}
                className="w-[100%] border border-black bg-white py-2 px-1 rounded"
              />
            </div>
            

            <button type="submit" className="w-[100%] px-2 justify-center bg-green-500 rounded-sm text-white py-3 flex items-center ">
              Signup
            </button>

          
          </form>

          {/* <Link to="/lo"> */}
          {/* <button className="text-xl bg-red-300 px-2 py-1">sign up</button> */}
          {/* </Link> */}
        </div>
        <Link to="/sign">
      <div>
        <span className="text-white">already have a account ? <underline className = "text-green-400  cursor-pointer ">Login here</underline>  </span>
      </div>
      </Link>
      </div>
    </div>
  );
};

export default Signup;