// import axios from "axios";
// import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";

export default function QRCARD({ datas }) {
  let email = localStorage.getItem("email");
  // const [url, setUrl] = useState("");
  // async function createURl(text) {
  //   const corsProxyUrl = "https://api.allorigins.win";
  //   const apiUrl = "https://clck.ru/--?url=";

  //   await axios.get(`${corsProxyUrl}/get?url=${apiUrl}${text}`).then((res) => {
  //     if (res?.status === 200) {
  //       setUrl(res?.data?.contents);
  //     } else {
  //       setUrl("something went wrong");
  //     }
  //   });
  // }

  // useEffect(() => {
  //   createURl(datas.task);
  // }, [datas.task]);

  return (
    <div>
      <div style={{ background: "white", padding: "16px" }}>
        <QRCode value={email} className="h-[40px]" />
        {/* <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a> */}
      </div>
    </div>
  );
}
