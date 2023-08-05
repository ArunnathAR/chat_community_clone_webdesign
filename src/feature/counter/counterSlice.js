import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counter',
    initialState:{
        roomId: null,
    },
    reducers:{
        enterRoom: (state,action) =>{
            state.roomId = action.payload.room;

        },
    },
});
export const {enterRoom}=counterSlice.actions;
export const selectRoomId =state=> state.counter.roomId;
export default counterSlice.reducer;

