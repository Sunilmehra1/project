import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

const Login = () => {
  const navigate = useNavigate();

  const [state, setstate] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  let user = localStorage.getItem("token");

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

  const handlesubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, state.email, state.password)
      .then((res) => {
        localStorage.setItem("token", res?._tokenResponse?.idToken);
        localStorage.setItem("email", state.email);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log("error", err);
      });
    // let users = localStorage.getItem("users");
    // console.log(users);

    // if (users) {
    //   let usersArray = JSON.parse(users);
    //   if (
    //     usersArray.find((data) => data.email === state.email) &&
    //     usersArray.find((data) => data.password === state.password)
    //   ) {
    //     localStorage.setItem(
    //       "token",
    //       usersArray.find((data) => data.email === state.email).id
    //     );
    //     navigate("/dashboard");
    //   }
    // } else {
    //   alert("please check your credentials");
    // }
  };

  return (
    <div className="flex justify-center items-center  text-black h-[100vh] bg-blue-900 capitalize flex-col">
      <div className="flex flex-col bg-white w-[30%] h-[40vh] space-y-5 items-center p-3 rounded-md">
        <div className="text-center text-3xl "> Login </div>

        <form
          className="flex flex-col space-y-6 items-center w-[100%]"
          onSubmit={handlesubmit}
        >
          <div className="flex  flex-col gap-3 w-[100%]">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handlechange}
              className="w-[100%] border border-black bg-white py-2 px-1 rounded"
            />
          </div>
          <div className="flex  gap-3 flex-col w-[100%]">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handlechange}
              className="w-[100%] border border-black bg-white py-3 px-1 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-[100%] px-2 justify-center bg-green-500 rounded-sm text-white py-3 flex items-center "
          >
            Login{" "}
          </button>
        </form>
      </div>

      <Link to="/lo">
        <div>
          <span className="text-white">
            Not have a account?
            <underline className="text-green-400  cursor-pointer ">
              Signup
            </underline>{" "}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Login;
