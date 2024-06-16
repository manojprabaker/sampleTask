import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "sampleSlice",
  initialState: {
    arr: [],
    editIndex:null,
  },  
  reducers: {
    updateReduxState: ( state, action ) =>
    {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateReduxState } = Slice.actions;
export default Slice.reducer;
