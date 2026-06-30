import './App.css'
import Footer from './Widgets/Footer/Footer'
import Header from './Widgets/Header/header'
import MainBanner from './Widgets/MainBanner/MainBanner'
import Carousel from './components/Carousel/Carousel.jsx'
import NewReleases from "./Widgets/NewReleases/NewReleases";


function App() {

  return (
    <>
      <Header />
      <MainBanner />
      <Carousel />
      <NewReleases />
      <Footer />
    </>
  )
}

export default App