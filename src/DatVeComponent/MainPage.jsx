import React from "react";
import Seats from "./Seats";
import axios from "axios";
import { useEffect, useState } from "react";
import seatDatas from "./seatDatas.json";
import SeatDetails from "./SeatDetails";

const MainPage = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seatNumbers = seatDatas.filter((seat) => seat.hang !== "");

  function getSeat(index1, index2) {
    // console.log(seatNumbers[index1].danhSachGhe[index2]);
    setSelectedSeats((state) => [
      ...selectedSeats,
      seatNumbers[index1].danhSachGhe[index2],
    ]);
  }

  return (
    <div className="container">
      <h1 className="text-center my-3">...</h1>
      {/* <div className="d-flex justify-content-center">
        <h4>Screen here </h4>
      </div> */}
      <div className="row">
        <div className="col-7">
          <Seats
            seatDatas={seatDatas}
            seatNumbers={seatNumbers}
            getSeat={getSeat}
          />
        </div>
        <div className="col-5">
          <SeatDetails />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
