import './App.css'
import Footer from './Widgets/Footer/Footer'
import Header from './Widgets/Header/header'
import MainBanner from './Widgets/MainBanner/MainBanner'
import Carousel from './components/Carousel/Carousel.jsx'
import NewReleases from "./Widgets/NewReleases/NewReleases";

// Import de fotos
import foto1 from "./assets/ascensao.png";
import foto2 from "./assets/depoisdasbrasas.png";
import foto3 from "./assets/devoradoresdeestrelas.png";
import foto4 from "./assets/estudodospardais.png";
import foto5 from "./assets/herdeirasdomar.png";
import foto6 from "./assets/ovilarejo.png";
import foto7 from "./assets/salvospeloamor.png";
import foto8 from "./assets/todasasmentiras.png";
import foto9 from "./assets/umpequenodescuido.png";


function App() {


  const livros = [
  
      {
          imagem: foto1,
          titulo: "Ascensão",
          autor: "Autor 1",
          preco: 49.90,
          rating: 4.8,
      },
      {
          imagem: foto2,
          titulo: "Depois das Brasas",
          autor: "Autor 2",
          preco: 54.90,
          rating: 4.5,
      },
      {
          imagem: foto3,
          titulo: "Devoradores de Estrelas",
          autor: "Autor 3",
          preco: 39.90,
          rating: 4.9,
      },
      {
          imagem: foto4,
          titulo: "Estudo dos Pardais",
          autor: "Autor 4",
          preco: 42.90,
          rating: 4.2,
      },
      {
          imagem: foto5,
          titulo: "Herdeiras do Mar",
          autor: "Autor 5",
          preco: 59.90,
          rating: 4.7,
      },
      {
          imagem: foto6,
          titulo: "O Vilarejo",
          autor: "Autor 6",
          preco: 34.90,
          rating: 4.6,
      },
      {
          imagem: foto7,
          titulo: "Salvos pelo Amor",
          autor: "Autor 7",
          preco: 44.90,
          rating: 4.3,
      },
      {
          imagem: foto8,
          titulo: "Todas as Mentiras",
          autor: "Autor 8",
          preco: 51.90,
          rating: 4.4,
      },
      {
          imagem: foto9,
          titulo: "Um Pequeno Descuido",
          autor: "Autor 9",
          preco: 47.90,
          rating: 4.8,
      },
  ];

  // const livrosDeTerror = livros.filter(livro => livro.genero === 'Terror' || livro.genero === 'Suspense')

  const livrosPromocionais = livros.filter(livro => livro.preco <= 40)



  return (
    <>
      <Header />
        <MainBanner />
        <Carousel livros={livros}/>
        <Carousel livros={livrosPromocionais} tituloCarousel='Livros em Super Oferta!!!!'/>
        {/* <Carousel livros={livros3}/> */}
        {/* <Carousel livros={livros4}/> */}
        
        <NewReleases />
      <Footer />
    </>
  )
}

export default App