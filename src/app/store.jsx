import { configureStore } from "@reduxjs/toolkit";
import surahSlice from "../features/surah/surahSlice";
import ayatSlice from "../features/ayat/ayatSlice";


const store = configureStore({
    reducer:{
        surahs:surahSlice,
        ayahs:ayatSlice
    }
})
export default store