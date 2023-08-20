import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
// import axios from "axios";
import QRCARD from "./QRCARD";
export default function Dashboard() {
  const [input, setinput] = useState({
    task: "",
  });

  const [data, setdata] = useState([]);
  let task = localStorage.getItem("Task");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (task) {
      JSON.parse(task);
      setdata(JSON.parse(task));
    }
  }, []);

  let user = localStorage.getItem("token");
  let email = localStorage.getItem("email");

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

  // const handlesubmit = (e) => {
  //   e.preventDefault();

  //   if (localStorage.getItem("Task")) {
  //     let task = JSON.parse(localStorage.getItem("Task"));

  //     localStorage.setItem(
  //       "Task",
  //       JSON.stringify([{ ...input, barcode: input.task }, ...task])
  //     );
  //     window.location.reload(false);
  //   } else {
  //     localStorage.setItem(
  //       "Task",
  //       JSON.stringify([{ ...input, barcode: input.task }])
  //     );
  //     window.location.reload(false);
  //   }
  // };

  console.log(data);

  return (
    <div className="bg-blue-500 h-[100vh] flex justify-between p-2  items-baseline">
      <form className="flex flex-col bg-white w-[30%] h-[60vh] space-y-5 items-center  p-3 rounded-sm  overflow-y-auto ">
        {/* <input
          type="name"
          className="w-[100%] border border-black bg-white py-2 px-1 rounded"
          name="task"
          value={input.task}
          onChange={handle}
          required
        /> */}
        <span>{email}</span>
        <div style={{ background: "white", padding: "16px" }}>
        <QRCode value={email} className="h-[40px]" />
        {/* <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a> */}
      </div>
        {/* <button
          className="w-[100%] px-2 justify-center bg-green-500 rounded-sm text-white py-3 flex items-center "
          onClick={handlesubmit}
        >
          Task
        </button> */}
        {data?.map((datas) => {
          return (
            <>
              <QRCARD datas={datas} />
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
