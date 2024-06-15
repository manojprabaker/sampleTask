import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "sampleSlice",
  initialState: {
    arr: [],
    editIndex:null,
  },  
  reducers: {   
    updateArr: (state, action) => {
      state.arr = action.payload;
    },
    updateEditIndex:(state,action)=>{
      state.editIndex=action.payload;
    }
  },
});

export const { updateArr,updateEditIndex } = Slice.actions;
export default Slice.reducer;
