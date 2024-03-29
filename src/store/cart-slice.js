import { createSlice } from "@reduxjs/toolkit";
 

const cartSlice = createSlice({
    name:'cart',
    initialState:{
     
        items:[],
        quantity:0,
        amount:0,
        totalQuantity:0
    },
    reducers:{

        addToCart(state,action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item)=>item.id === newItem.id);
            state.totalQuantity++;
            if(!existingItem){
                state.items.push({id:newItem.id, price:newItem.price, quantity:1, name:newItem.title});

            }else{
                existingItem.quantity++;
                existingItem.totalPrice=existingItem.totalPrice + newItem.price;

            }
        },
        removeFromCart(state,action) {
         
            const id = action.payload;
            const existingItem = state.items.find((item)=>item.id===id);
            if(existingItem.quantity === 1){
              state.items = state.items.filter(item=>item.id !== id);
            }else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }

    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;