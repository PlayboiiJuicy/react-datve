import React from "react";

const Seats = ({ seatDatas, seatNumbers, getSeat }) => {
  //   const seatNumbers = seatDatas.filter((seat) => seat.hang !== "");

  //   function abc(index1, index2) {
  //     console.log(seatNumbers[index1].danhSachGhe[index2]);
  //   }

  return (
    <div>
      <div className="d-flex justify-content-center bg-dark text-white my-4">
        <h4>Screen here </h4>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            {seatDatas[0].danhSachGhe.map((seat, idx) => {
              return <th key={idx}>{seat.soGhe}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {seatNumbers.map((seat, index1) => (
            <tr key={index1}>
              {seat.hang}
              {seat.danhSachGhe.map((item, index2) => (
                <td key={index2}>
                  <input
                    type="checkbox"
                    onClick={() => getSeat(index1, index2)}
                  />
                </td>
              ))}{" "}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Seats;
