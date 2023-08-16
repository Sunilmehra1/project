import React, { useState } from "react";
import { Link  , json, useNavigate} from "react-router-dom";

import {createUserWithEmailAndPassword , updateProfile} from "firebase/auth"
import { auth } from "./Firebase";

const Signup = () => {
  const navigate = useNavigate()
  const [input, setinput] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    
  });
  const[ermessage , setermessage]= useState()
  const handlechange = (e) => {
    setinput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = async(e) => {
    e.preventDefault();

const {name , email, contact, password} = input;

const data = await fetch(
  "https://sunil-93261-default-rtdb.firebaseio.com/user.json",

{
  method:"POST",
  headers: {
    "Content-Type-":"application/json",
  },
  body: JSON.stringify({
    name,
    email,
    contact,
    password
    
  })

  
},



)


    if (!input.name || !input.email || !input.password  ) {
      setermessage("fill all fields")
      return false ;
    }
    setermessage("")

createUserWithEmailAndPassword(auth  , input.email , input.password).then((res)=>{
console.log(res)
const user = res.user
 
console.log(user)
navigate("/page")

}).catch((err)=>{
console.log("error" , err)

})

    // e.preventDefault();
    // let useralreadyexist  = localStorage?.getItem('users') ? JSON.parse(localStorage?.getItem('users')) : [];
    // console.log(useralreadyexist)
    // let user = useralreadyexist?.find(data => data.email === input.email);
    
    // if(user){
    // alert('user already exist')
    // }  else  if(localStorage.getItem('users')){
    // let user =  JSON.parse(localStorage.getItem('users'));
    //   localStorage.setItem('users', JSON.stringify([...user , input]))
    // }else{
    //  let user = input;
    //  localStorage.setItem('users' ,JSON.stringify([user]))
    // }
    setinput({
      name: "",
      email: "",
      contact: "",
      password: "",
      retype: "",
      id   : new Date().getUTCMilliseconds()
    })
  };

  return (
    <div>
      <div className="flex justify-center items-center h-[100vh]  text-black mt-2 bg-blue-900 p-3 capitalize flex-col">
        <div className="flex flex-col bg-white w-[30%] h-[70vh] space-y-5 items-center  p-3 rounded-sm">
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
              <span className="text-red-700">{ermessage}</span>
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
