import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [input, setinput] = useState({
    task: "",
    url : `https://www.${Math.floor(Math.random() * Date.now())}.com`
  });

  const [data , setdata]  = useState([])
  let task = localStorage.getItem("Task");

  useEffect(() => {
    if (task) {
      JSON.parse(task);
      setdata(JSON.parse(task))
      
    }
    
  }, []);

  let user = localStorage.getItem("token");

  let navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  }, [user]);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  console.log(`https://www.${Math.floor(Math.random() * Date.now())}.com`);
  const handle = (e) => {
    setinput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if (localStorage.getItem("Task")) {
      let task = JSON.parse(localStorage.getItem("Task"));
      localStorage.setItem("Task", JSON.stringify([...task, input]));
    } else {
      localStorage.setItem("Task", JSON.stringify([input]));
    }
  };

console.log(data)

  return (
    <div className="bg-blue-500 h-[100vh] flex justify-between ">
      <form className="flex flex-col bg-white w-[30%] h-[30vh] space-y-5 items-center  p-3 rounded-sm ">
        <input
          type="name"
          className="w-[100%] border border-black bg-white py-2 px-1 rounded"
          name="task"
          value={input.task}
          onChange={handle}
        />

        <button
          className="w-[100%] px-2 justify-center bg-green-500 rounded-sm text-white py-3 flex items-center "
          onClick={handlesubmit}
        >
          Task
        </button>
        {
data?.map((datas)=>{
  
  return  <>
  <h1>{datas?.task}</h1>
  <span>{datas?.url}</span>
  </>
})

        }
      </form>

      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}
