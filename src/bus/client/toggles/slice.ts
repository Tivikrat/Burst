import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    isOnline:   navigator.onLine,
    isLoggedIn: false,
};
export type TogglesKeys = keyof typeof initialState;
export type Options = { type: TogglesKeys, value: boolean };
export const togglesSlice = createSlice({
    name:     'toggles',
    initialState,
    reducers: {
        setToggle: (state, action: PayloadAction<Options>) => {
            state[ action.payload.type ] = action.payload.value;
        },
        resetTogglesToInitial: () => initialState,
    },
});
export default togglesSlice.reducer;
