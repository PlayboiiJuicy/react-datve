import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const SeatDetails = ({ seatInfors }) => {
  const { selectingSeats } = useSelector((state) => state.bookingSeat);
  const dispatch = useDispatch();

  const handleCancel = (seat) => {
    dispatch({ type: "cancel", seat });
    console.log(seat);
  };

  return (
    <div className="container">
      <h4 className="text-white text-center">Danh Sách Ghế Bạn Chọn</h4>
      <div className="text-white">
        <button className="gheDuocChon"></button>
        <span>Ghế được đặt</span>
        <br />
        <button className="gheDangChon"></button>
        <span>Ghế đang đặt</span>
        <br />
        <button className="ghe" style={{ marginLeft: "0" }}></button>
        <span>Ghế trống</span>
      </div>
      <Table width="70%" bordered hover size="sm" className="text-center ">
        <thead>
          <tr className="text-white">
            <th></th>
            <th>Số Ghế</th>
            <th>Giá Tiền</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {selectingSeats.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.soGhe}</td>
                <td>{item.gia.toLocaleString()}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleCancel(item.soGhe);
                    }}
                  >
                    Huỷ
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>Tổng Tiền</td>
            <td colSpan={3}>
              {selectingSeats.reduce((total, item) => {
                return (total += item.gia);
              }, 0)}
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};

export default SeatDetails;
