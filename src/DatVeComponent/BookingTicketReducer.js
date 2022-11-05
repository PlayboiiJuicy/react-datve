import data from "./seatDetais.json";
const initialState = { selectingSeats: [], seatsData: data };

const BookingTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "booked": {
      let selectingSeatsUpdate = [...state.selectingSeats];
      let idx = selectingSeatsUpdate.findIndex(
        (item) => item.soGhe === action.seat.soGhe
      );
      // console.log(action);
      if (idx !== -1) {
        selectingSeatsUpdate.splice(idx, 1);
      } else {
        selectingSeatsUpdate.push(action.seat);
      }
      state.selectingSeats = selectingSeatsUpdate;
      return { ...state };
    }
    case "cancel": {
      let selectingSeatsUpdate = [...state.selectingSeats];
      let idx = selectingSeatsUpdate.findIndex(
        (item) => item.soGhe === action.seat
      );
      if (idx !== -1) {
        selectingSeatsUpdate.splice(idx, 1);
      }
      state.selectingSeats = selectingSeatsUpdate;
      return { ...state };
    }
    case "BookedSuccess": {
      let tempList = [...state.selectingSeats];
      let tempSeatDatas = [...state.seatsData];
      let seatsListIdx = tempList.map((item) => {
        return item.soGhe;
      });

      tempSeatDatas.forEach((item) => {
        item.danhSachGhe.forEach((seat) => {
          const isExisted = seatsListIdx.some((x) => x == seat.soGhe);
          if (isExisted) {
            seat.daDat = true;
            seat.gia = 0;
          }
        });
      });

      return { ...state, seatsData: tempSeatDatas, selectingSeats: [] };
    }
    default:
      return { ...state };
  }
};

export default BookingTicketReducer;
