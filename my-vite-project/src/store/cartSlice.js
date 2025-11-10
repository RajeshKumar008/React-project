import { createSlice, createSelector } from "@reduxjs/toolkit";

export const products = [
  { id: "p1", name: "Snake Plant", price: 499, category: "Low Light", img: "https://images.unsplash.com/photo-1560185008-b033106af2fb?q=80&w=800" },
  { id: "p2", name: "Aloe Vera", price: 399, category: "Succulent", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800" },
  { id: "p3", name: "Peace Lily", price: 699, category: "Air Purifying", img: "https://images.unsplash.com/photo-1614598304489-9f29a70bc57c?q=80&w=800" },
  { id: "p4", name: "ZZ Plant", price: 799, category: "Low Light", img: "https://images.unsplash.com/photo-1593697820681-1ff7d6a8fd9a?q=80&w=800" },
  { id: "p5", name: "Monstera", price: 1299, category: "Tropical", img: "https://images.unsplash.com/photo-1603006905003-c7dfb90f33ae?q=80&w=800" },
  { id: "p6", name: "Spider Plant", price: 449, category: "Air Purifying", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800" }
];

const initialState = { items: {} };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      const product = products.find((p) => p.id === id);
      if (!product) return;
      if (!state.items[id]) state.items[id] = { product, qty: 1 };
    },
    increment: (state, action) => { state.items[action.payload].qty += 1; },
    decrement: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].qty -= 1;
        if (state.items[id].qty <= 0) delete state.items[id];
      }
    },
    remove: (state, action) => { delete state.items[action.payload]; },
    clear: (state) => { state.items = {}; }
  }
});

export const { addToCart, increment, decrement, remove, clear } = cartSlice.actions;

const selectCartItemsMap = (s) => s.cart.items;
export const selectCartItems = createSelector([selectCartItemsMap], (items) => Object.values(items));
export const selectCartCount = createSelector([selectCartItems], (list) => list.reduce((a, b) => a + b.qty, 0));
export const selectCartTotal = createSelector([selectCartItems], (list) => list.reduce((a, b) => a + b.qty * b.product.price, 0));

export default cartSlice.reducer;
