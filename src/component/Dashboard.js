import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import axios from "axios";
export default function Dashboard() {
  const [input, setinput] = useState({
    task: "",
  });

  const [data, setdata] = useState([]);
  let task = localStorage.getItem("Task");

  useEffect(() => {
    if (task) {
      JSON.parse(task);
      setdata(JSON.parse(task));
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
    localStorage.removeItem("token");
    navigate("/");
  };

  const handle = (e) => {
    setinput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  async function createURl(url) {
    const corsProxyUrl = "https://api.allorigins.win";
    const apiUrl = "https://clck.ru/--?url=";

   await axios.get(`${corsProxyUrl}/get?url=${apiUrl}${url}`).then(res => {
      if (res?.status === 200) {
        // console.log(res?.data?.contents)
        return res?.data?.contents;
      } else {
        return "";
      }
    })

   
  }

  const handlesubmit = (e) => {
    e.preventDefault();

    if (localStorage.getItem("Task")) {
      let task = JSON.parse(localStorage.getItem("Task"));
   let url = createURl(input.task)
   console.log(url)
      localStorage.setItem(
        "Task",
        JSON.stringify([{ ...input, barcode: input.task , url }, ...task])
      );

      // window.location.reload(false);
    } else {
      let url = createURl(input.task)
      console.log(url)
      localStorage.setItem(
        "Task",
        JSON.stringify([{ ...input, barcode: input.task ,url }])
      );
      // window.location.reload(false);
    }
  };

  console.log(data);

  return (
    <div className="bg-blue-500 h-[100vh] flex justify-between align-baseline p-2">
      <form className="flex flex-col bg-white w-[30%] h-[60vh] space-y-5 items-center  p-3 rounded-sm  overflow-y-auto ">
        <input
          type="name"
          className="w-[100%] border border-black bg-white py-2 px-1 rounded"
          name="task"
          value={input.task}
          onChange={handle}
          required
        />

        <button
          className="w-[100%] px-2 justify-center bg-green-500 rounded-sm text-white py-3 flex items-center "
          onClick={handlesubmit}
        >
          Task
        </button>
        {data?.map((datas) => {
          return (
            <>
              <h1>{datas?.task}</h1>
              <div style={{ background: "white", padding: "16px" }}>
                <QRCode value={datas?.task} className="h-[40px]" />
                {/* <p>{datas?.url}</p> */}
              </div>
            </>
          );
        })}
      </form>

      <button
        onClick={() => logout()}
        className="bg-green-500 rounded-lg text-white p-2"
      >
        Logout
      </button>
    </div>
  );
}
