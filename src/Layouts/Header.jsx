// import { useEffect } from "react";
import { fontArab } from "../helper/nomorArab";
// import TopBadge from "./TopBadge";
// import api from "../app/api";

export default function Header() {
    // useEffect(()=>{
    //     api.get('random')
    // },[])
    return (
        <header className="bg-green-100 shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-10 flex justify-center">
                <div className="flex flex-col items-center justify-center">
                    <span className="xl:text-4xl text-2xl lg:text-3xl text-center text-gray-900" style={fontArab}>اِنَّ الَّذِيْنَ يُنَادُوْنَكَ مِنْ وَّرَاۤءِ الْحُجُرٰتِ اَكْثَرُهُمْ لَا يَعْقِلُوْنَ</span>
                    <span className="text-center italic text-gray-500">Sesungguhnya orang-orang yang memanggil engkau (Muhammad) dari luar kamar(mu) kebanyakan mereka tidak mengerti. <span>(49:4)</span></span>
                </div>
            </div>
            {/* <TopBadge /> */}
        </header>
    )
}