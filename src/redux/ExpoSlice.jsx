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
            console.log('sd')
        state.choseDate = action.payload.value.toDateString()
        },
        bookStall: (state, action) => {
            action.payload.date =  state.choseDate;
            state.bookings.push( action.payload);
        },
        deleteStall: (state, action)  => {
            state.bookings = state.bookings.filter((booking) => booking.stall !== action.payload.stall && booking.shell !== action.payload.shell);
            console.log(action.payload);
            // state.bookings = state.bookings.filter((item) => item !== action.payload)
        }
    }
})
export const {choseDate, bookStall, deleteStall} =  expoSlice.actions;
export default expoSlice.reducer;
