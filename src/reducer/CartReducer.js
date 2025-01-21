import { createSlice } from "@reduxjs/toolkit";

const Reducer = createSlice({
    name:'cart',
    initialState:{ itemCount:0},
    reducers:{
        addItem:(state) =>{
            state.itemCount +=1;
        },
        removeItem:(state) =>{
            if(state.itemCount>0){
                state.itemCount -= 1; 
            }
        },
    },
});

export const {addItem, removeItem} = Reducer.actions;
export default Reducer.reducer;