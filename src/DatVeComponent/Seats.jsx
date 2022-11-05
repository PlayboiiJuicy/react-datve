import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import swal from "sweetalert";

const Seats = ({ seatDetails, soGhe, getSeat }) => {
  //   const seatNumbers = seatDatas.filter((seat) => seat.hang !== "");

  //   function abc(index1, index2) {
  //     console.log(seatNumbers[index1].danhSachGhe[index2]);
  //   }
  // console.log(seatDetails.danhSachGhe);
  const { selectingSeats, seatsData } = useSelector(
    (state) => state.bookingSeat
  );
  console.log("redux :", seatsData);

  console.log("state:", seatDetails);
  const dispatch = useDispatch();

  const handleSelected = (seat) => {
    dispatch({ type: "booked", seat });

    // console.log(seat);
  };
  // swal("Hello world!");
  // console.log(selectingSeats);
  const renderSeats = () => {
    // console.log(seatsData);
    return seatsData.map((row, idx) => {
      if (idx === 0) {
        return (
          <div className="d-flex justify-content-center">
            {row.danhSachGhe.map((item, idx) => {
              return (
                <button key={idx} className="rowNumber">
                  {item.soGhe}
                </button>
              );
            })}
          </div>
        );
      } else {
        return (
          <div className="d-flex justify-content-center" key={idx}>
            <div className="text-white">{row.hang}</div>

            {row.danhSachGhe.map((ghe, idx) => {
              let selectedSeatCSS = "";
              let disabled = false;
              if (ghe.daDat) {
                console.log("ghe :>> ", ghe);
                selectedSeatCSS = "gheDuocChon";
                disabled = true;
              }

              let selectingSeatsCSS = "";

              {
                let selectingSeatIdx = selectingSeats.findIndex(
                  (selectingSeat) => selectingSeat.soGhe == ghe.soGhe
                );
                if (selectingSeatIdx !== -1) {
                  selectingSeatsCSS = "gheDangChon";
                }
              }

              return (
                <button
                  onClick={() => {
                    handleSelected(ghe);
                  }}
                  disabled={disabled}
                  className={`ghe ${selectedSeatCSS} ${selectingSeatsCSS}`}
                  key={idx}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        );
      }
    });
  };

  return (
    <div>
      <div className="container">{renderSeats()}</div>
    </div>
  );
};

export default Seats;

// <table className="table ">
//           <thead>
//             <tr>
//               <th></th>
//               {/* {seatDatas[0].danhSachGhe.map((seat, idx) => {
//                 return <th key={idx}>{seat.soGhe}</th>;
//               })} */}
//             </tr>
//           </thead>
//           <tbody>
//             {/* {seatNumbers.map((seat, index1) => (
//               <tr key={index1}>
//                 {seat.hang}
//                 {seat.danhSachGhe.map((item, index2) => (
//                   <td key={index2}>
//                     <input
//                       type="checkbox"
//                       onClick={() => getSeat(index1, index2)}
//                     />
//                   </td>
//                 ))}{" "}
//               </tr>
//             ))} */}
//           </tbody>
//         </table>
