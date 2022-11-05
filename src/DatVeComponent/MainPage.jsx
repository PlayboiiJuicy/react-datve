import React from "react";
import Seats from "./Seats";
import axios from "axios";
import { useEffect, useState } from "react";
import seatDetailsData from "./seatDetais.json";
import SeatDetails from "./SeatDetails";
import "./style.css";

const MainPage = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  // const seatNumbers = seatDatas.filter((seat) => seat.hang !== "");

  // function getSeat(index1, index2) {
  //   console.log(seatNumbers[index1].danhSachGhe[index2]);
  //   setSelectedSeats((state) => [
  //     ...selectedSeats,
  //     seatNumbers[index1].danhSachGhe[index2],
  //   ]);
  // }

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundImage: "url(./bgmovie.jpg)",
        backgroundSize: "100vw",
      }}
    >
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      >
        <h1 className="text-center my-3 text-white">Đặt vé xem phim</h1>
        <div className="row ">
          <div className="col-7">
            <div className="d-flex justify-content-center  text-white my-4">
              <div className="screen text-center"> Screen here</div>
            </div>
            <Seats seatDetails={seatDetailsData} />
          </div>
          <div className="col-5">
            <SeatDetails seatInfors={selectedSeats} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
