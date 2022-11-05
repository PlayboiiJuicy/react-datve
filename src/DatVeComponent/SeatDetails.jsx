import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";

const SeatDetails = () => {
  const { selectingSeats } = useSelector((state) => state.bookingSeat);
  const dispatch = useDispatch();

  const handleCancel = (seat) => {
    dispatch({ type: "cancel", seat });
    console.log(seat);
  };

  const handleBooked = () => {
    dispatch({ type: "BookedSuccess" });
    Swal.fire({
      title: "Đặt Vé Thành Công!",
      text: "Cảm Ơn Nhé !!!",
      icon: "success",
      confirmButtonText: "Cool",
    });
  };

  return (
    <div className="container ">
      <h4 className="text-white text-center">Danh Sách Ghế Bạn Chọn</h4>
      <div className="text-white mt-3">
        <button className="gheDuocChon my-1"></button>
        <span className="mx-2">Ghế được đặt</span>
        <br />
        <button className="gheDangChon my-1"></button>
        <span className="mx-2">Ghế đang đặt</span>
        <br />
        <button className="ghe my-1" style={{ marginLeft: "0" }}></button>
        <span className="mx-2">Ghế trống</span>
      </div>
      <Table width="70%" bordered hover size="sm" className="text-center mt-4 ">
        <thead>
          <tr className="text-white">
            <th></th>
            <th>Số Ghế</th>
            <th>Giá Tiền</th>
            <th></th>{" "}
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
      <div className="bookingButton">
        <button onClick={handleBooked} className="btn btn-warning">
          Đặt Vé
        </button>
      </div>
    </div>
  );
};

export default SeatDetails;
