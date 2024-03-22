import { createSlice } from "@reduxjs/toolkit";
 
const Courseslice = createSlice({
    name:"course",
    initialState:[],
    reducers:{
        addCourse:(state,action)=>{
            state.push(action.payload)
        },
        removeCourse: (state, action) => {
            return state.filter((item, index) => index !== action.payload);
        }
    }
}) 
export const {addCourse ,removeCourse} = Courseslice.actions;
export default Courseslice.reducer;