import { useDispatch } from "react-redux";
import { fontArab, nomorArab } from "../helper/nomorArab";
import SurahDepan from "../Layouts/SurahDepan";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSurahs } from "../features/surah/surahSlice";

export default function ListSurah() {
    const dispatch = useDispatch();
    const surah = useSelector((state) => state.surahs.items);
    const surahStatus = useSelector((state) => state.surahs.status);

    useEffect(() => {
        if (surahStatus === 'idle') {
            dispatch(fetchSurahs());
        }
    }, [surahStatus, dispatch]);
    return (
        <>
            <SurahDepan />
            <hr className="w-100 mx-auto my-6 border-t-1 border-gray-400"></hr>
            <div className="container grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {surah.map((s) => (
                    <a key={s.number} className="bg-white rounded-xl p-4 flex flex-col justify-between shadow-md">
                        <div className='flex items-center mb-3'>
                            <div className='border-2 rounded-full h-10 w-10 border-green-700 flex items-end justify-center'>
                                <h3 className='text-xl text-green-600' style={fontArab}>{nomorArab(s.number)}</h3>
                            </div>
                            <div className='ml-4  flex flex-grow w-auto items-center justify-between'>
                                <div className="flex flex-col">
                                    <p className='font-bold text-md'>{s.name}</p>
                                    <p className='text-sm text-gray-500 italic'>{s.translation}</p>
                                </div>
                                <button className='rounded-lg float-end border px-3 h-fit font-bold text-green-600 border-green-500'>Detail</button>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className='flex flex-col justify-center items-baseline h-fit'>
                                <p className='text-sm text-gray-600 italic'>{s.revelation} <span className=' font-bold'>-</span> {s.numberOfAyahs} Ayat</p>
                            </div>
                            <div className='flex'>
                                <button className='rounded-lg border px-3 font-bold text-green-600 border-green-500'>Audio</button>
                            </div>
                        </div>
                    </a>
                ))}
            </div></>
    )
}