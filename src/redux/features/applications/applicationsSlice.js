import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApplications } from "./applicationsAPI";

const initialState = {
    applications:[],
    isLoading:false,
    isError:false,
    error:''
}

///--asynck thnuk ---

export const feactApplications = createAsyncThunk('applications/feactApplications', async() =>{
    const applications = await getApplications()
    return applications
 })


const applicationsSlice = createSlice({
    name:'applications',
    initialState,
    extraReducers:(builder) =>{
        builder
        .addCase(feactApplications.pending, (state) =>{
            state.isError = false,
            state.isLoading = true
        })

        .addCase(feactApplications.fulfilled, (state,action) =>{
            state.isLoading = false,
            state.applications = action.payload
        })

        .addCase(feactApplications.rejected, (state,action) =>{
            state.isLoading = false,
            state.applications = [],
            state.isError = true,
            state.error = action.error?.message
        })
    }
})

export default applicationsSlice.reducer