import { configureStore } from "@reduxjs/toolkit";
import coursereducer from "./Courseslice"

const Store = configureStore({
    reducer:{
        name: coursereducer
    }
})
export default Store;