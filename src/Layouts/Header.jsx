import { useEffect, useState } from "react";
import { fontArab } from "../helper/nomorArab";
// import TopBadge from "./TopBadge";
import api from "../app/api";

export default function Header() {
    const [ayatRandom, setAyatRandom] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await api.get('random');
                setAyatRandom(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        fetchData()
    }, [])
    return (
        <header onClick={() => { alert(ayatRandom.translation) }} className="bg-green-100 shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-10 flex justify-center">
                <div className="flex flex-col items-center justify-center">
                    {
                        ayatRandom ? (
                            <>
                                <span className="xl:text-4xl text-2xl lg:text-3xl text-center text-gray-900" style={fontArab}>{ayatRandom.arab}</span>
                                <span className="text-center italic text-gray-500">{ayatRandom.translation} <span>({ayatRandom.number.inSurah}:{ayatRandom.number.inQuran})</span></span>
                            </>
                        ) : (
                            <p>Loading...</p>
                        )
                    }
                </div>
            </div>
            {/* <TopBadge /> */}
        </header>
    )
}