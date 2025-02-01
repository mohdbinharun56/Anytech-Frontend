
import './App.css'
import Banner from './components/Banner/Banner'
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
      </main>
    </>
  )
}

export default App
