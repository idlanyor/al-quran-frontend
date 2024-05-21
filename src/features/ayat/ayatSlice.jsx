import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../app/api";

const fetchAyat = createAsyncThunk('ayat/fetchAyats', async (nomorSurah) => {
    const response = await api.get(`surahs/${nomorSurah}/ayahs`)
    return response.data
})

const ayatSlice = createSlice({
    name: 'ayats',
    initialState: {
        items: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAyat.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAyat.fulfilled, (state, action) => {
                state.status = 'succeeded',
                    state.items = action.payload
            })
            .addCase(fetchAyat.rejected, (state, action) => {
                state.status = 'succeeded',
                    state.error = action.error.message
            })
    }
})
export { fetchAyat }
export default ayatSlice.reducer