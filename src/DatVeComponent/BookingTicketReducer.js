const initialState = { selectingSeats: [] };

const BookingTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "booked": {
      let selectingSeatsUpdate = [...state.selectingSeats];
      let idx = selectingSeatsUpdate.findIndex(
        (item) => item.soGhe === action.seat.soGhe
      );
      // console.log(action);
      // console.log(idx);
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
      console.log(action);
      if (idx !== -1) {
        selectingSeatsUpdate.splice(idx, 1);
      }
      state.selectingSeats = selectingSeatsUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BookingTicketReducer;
