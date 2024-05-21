import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../app/api";

export const fetchSurahs = createAsyncThunk('surah/fetchSurahs', async () => {
    const response = await api.get('surahs')
    return response.data
})
const surahSlice = createSlice({
    name: 'surah',
    initialState: {
        items: [],
        status: 'idle',
        error: null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchSurahs.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(fetchSurahs.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.items = action.payload
        })
        .addCase(fetchSurahs.rejected,(state,action)=>{
            state.status = 'rejected'
            state.error = action.error.message
        })
    }
})

export default surahSlice.reducer