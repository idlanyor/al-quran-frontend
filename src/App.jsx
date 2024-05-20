// import './App.css'
import Header from './Layouts/Header'
import Navbar from './Layouts/Navbar'
import SurahDepan from './Layouts/SurahDepan'
// import TopBadge from './Layouts/TopBadge'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <main>
        <div className="mx-8 md:mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <SurahDepan />
          <hr className="w-100 mx-auto my-6 border-t-1 border-gray-400"></hr>
          <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <div className="bg-white rounded-xl px-2 py-3 flex justify-between">
              <div className='kanan flex items-center'>
                <h3 className=''>1</h3>
              </div>
              <div className='tengah'>
                <p className=' font-bold'>Al-Fātiḥah</p>
                <p>Makkiyah <span>.</span> <span>7 Ayat</span></p>
              </div>
              <div className='kanan'>
                <span>الفاتحة</span>
              </div>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
