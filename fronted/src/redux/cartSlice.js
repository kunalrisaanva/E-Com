
import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            // console.log("working",product);
            const existingItem = state.items.find((item) => item._id === product._id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...product, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            // console.log("product id gotten",productId);
            state.items = state.items.filter((item) => item._id !== productId);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                existingItem.quantity = quantity;
            }
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
