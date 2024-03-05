import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { decrement, deleteCart, increment } from "../store/reducer/BuyProduct";
import { RootState } from "../store/store";
const Cart = () => {
  const renderProduct = useSelector((state: RootState) => state.cartSlide.cart);
  const dispatch = useDispatch();
  const goBack = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div id="RenderCart">
        <div>
          <h1>Danh sách sản phẩm trong giỏ hàng</h1>
          <br />
          <br />
          <h3
            onClick={goBack}
            style={{
              cursor: "pointer",
              backgroundColor: "red",
              color: "white",
              padding: "5px",
              borderRadius: "5px",
              width: "200px",
              textAlign: "center",
            }}
          >
            Quay lại trang chủ
          </h3>
          <br />
        </div>
        <table>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Action</th>
          </tr>
          {renderProduct.map((item: any) => {
            return (
              <tr>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => dispatch(decrement(item))}>-</button>
                  {item.quantity}
                  <button onClick={() => dispatch(increment(item))}>+</button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(deleteCart(item));
                    }}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Cart;
