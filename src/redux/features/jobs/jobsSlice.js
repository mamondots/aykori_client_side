import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobs } from "./jobsAPI";


const initialState = {
    jobs:[],
    isLoading:false,
    isError:false,
    error:''
}

///--asynck thnuk ---

export const feactJobs = createAsyncThunk('jobs/feactJobs', async() =>{
    const jobs = await getJobs()
    return jobs
 })


const jobsSlice = createSlice({
    name:'jobs',
    initialState,
    extraReducers:(builder) =>{
        builder
        .addCase(feactJobs.pending, (state) =>{
            state.isError = false,
            state.isLoading = true
        })

        .addCase(feactJobs.fulfilled, (state,action) =>{
            state.isLoading = false,
            state.jobs = action.payload
        })

        .addCase(feactJobs.rejected, (state,action) =>{
            state.isLoading = false,
            state.jobs = [],
            state.isError = true,
            state.error = action.error?.message
        })
    }
})

export default jobsSlice.reducer