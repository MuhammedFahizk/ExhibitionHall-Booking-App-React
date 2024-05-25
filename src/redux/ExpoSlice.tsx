import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    choseDate: new Date(),
    bookings: [],
}

const expoSlice = createSlice({
    name: 'Expo',
    initialState,
    reducers: {
        choseDate: (state, action) => {
        state.choseDate = action.payload.value
        },
        bookStall: (state, action) => {
            action.payload.date =  state.choseDate;
            state.bookings.push( action.payload);
        }
    }
})
export const {choseDate, bookStall} =  expoSlice.actions;
export default expoSlice.reducer;
