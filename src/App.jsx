import ListSurah from './Components/ListSurah';
import Header from './Layouts/Header';
import Navbar from './Layouts/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <div className="mx-8 md:mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <ListSurah />
        </div>
      </main>
    </>
  );
}
export default App