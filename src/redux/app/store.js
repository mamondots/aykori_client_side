import { configureStore } from "@reduxjs/toolkit";
import applicationsSlice from "../features/applications/applicationsSlice";
import jobsSlice from "../features/jobs/jobsSlice";

export const store = configureStore({
    reducer:{
        applications:applicationsSlice,
        jobs:jobsSlice
    }
})