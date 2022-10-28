import { createStore, combineReducers } from "redux";
import BookingTicketReducer from "./DatVeComponent/BookingTicketReducer";

const reducer = combineReducers({
  bookingSeat: BookingTicketReducer,
});

const storeReducer = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default storeReducer;
