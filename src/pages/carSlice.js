import { createSlice } from '@reduxjs/toolkit';

export const carSlice = createSlice({
    name: 'car',
    initialState: {
      carData: {}
    },
    reducers: {
      loadCarData: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      }
    }
    
});

//exporto las ACCIONES.....
export const { loadCarData } = carSlice.actions;

export const carDataCheck = (state) => state.car;

export default carSlice.reducer;