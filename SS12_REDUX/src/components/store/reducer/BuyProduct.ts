import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../../baitap/Product";

interface ProductsInCart {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}
interface State {
  cart: ProductsInCart[];
}
export const cart = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addCart: (state: State, action: PayloadAction<Products>) => {
      // state.cart.push(action.payload)
      console.log(action.payload);
      let index = state.cart.findIndex((item) => item.id === action.payload.id);
      if (index === -1) {
        state.cart.push({ ...action.payload, quantity: 1 });
        alert("Đã thêm vào giỏ hàng");
      } else {
        state.cart[index].quantity += 1;
        alert("Tăng số lượng thành công");
      }
    },
    decrement: (state: State, action: PayloadAction<Products>) => {
      let index = state.cart.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity -= 1;
      } else {
        if (confirm("Bạn muốn xóa sản phẩm này ?")) {
          state.cart.splice(index, 1);
        }
      }
    },
    increment: (state: State, action: PayloadAction<Products>) => {
      let index = state.cart.findIndex(
        (item: any) => item.id === action.payload.id
      );
      state.cart[index].quantity += 1;
    },
    deleteCart: (state: State, action: PayloadAction<Products>) => {
      let index = state.cart.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (confirm("Bạn muốn xóa sản phẩm này ?")) {
        state.cart.splice(index, 1);
      }
    },
  },
});
export const { addCart, decrement, increment, deleteCart } = cart.actions;
export default cart.reducer;
