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
        state.choseDate = action.payload
        },
        bookStall: (state, action) => {
            state.bookings.push(action.payload);
        }
    }
})
export const {choseDate} =  expoSlice.actions;
export default expoSlice.reducer;
