
import './App.css'
import Banner from './components/Banner/Banner'
import Client from './components/Client/Client'
import ContactUS from './components/ContactUs/ContactUS'
import Footer from './components/Footer/Footer'
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
        <Client/>
        <ContactUS/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
