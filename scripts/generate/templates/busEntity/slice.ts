import { createSlice } from '@reduxjs/toolkit';
import * as types from './types';
import * as reducers from './reducers';
// import { extraReducers } from './thunk'; /* Uncomment if you use thunk middleware */

const initialState = null;

export const __entityName__Slice = createSlice<types.__entityName__(pascalCase)State, typeof reducers>({
    name: '__entityName__',
    initialState,
    reducers,
    // extraReducers,  /* Uncomment if you use thunk middleware */
});

export const sliceName = __entityName__Slice.name;
export const __entityName__Actions = __entityName__Slice.actions;
export default __entityName__Slice.reducer;
