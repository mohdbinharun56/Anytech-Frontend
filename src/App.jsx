
import './App.css'
import Banner from './components/Banner/Banner'
import FutureFinance from './components/FutureFinance/FutureFinance'
import Header from './components/Header/Header'
import Philosophy from './components/Philosophy/Philosophy'

function App() {

  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Banner/>
        <Philosophy/>
        <FutureFinance/>
      </main>
    </>
  )
}

export default App
