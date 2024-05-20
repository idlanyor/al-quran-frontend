export default function SurahDepan() {
    return (
        <div className="flex justify-between">
            <div>
                <span>Tampilan</span>
                <select className="text-black mx-2 py-2 px-3 rounded-lg bg-white border">
                    <option value="" className="text-black">Surah</option>
                    <option value="">Juz</option>
                </select>
            </div>
            <div>
                <span>Urutkan</span>
                <select id="urutan" className="text-black mx-2 py-2 px-3 rounded-lg bg-white border">
                    <option value="asc" className="text-black">Dari depan</option>
                    <option value="desc">Dari belakang</option>
                </select>
            </div>
        </div>
    )
}