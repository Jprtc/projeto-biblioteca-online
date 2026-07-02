import { useState } from "react";
import "./Carousel.css";



    

function Carousel({livros,tituloCarousel='Livros em Oferta'}) {
    const [indiceAtual, setIndiceAtual] = useState(0);

    const ITEM_WIDTH = 150; 

    function proximoLivro() {
        setIndiceAtual((prev) =>
          prev >= livros.length - 5 ? 0 : prev + 1
        );
    }

    function livroAnterior() {
        setIndiceAtual((prev) =>
            prev <= 0 ? livros.length - 5 : prev - 1
        );
    }

    return (
    <div className="carousel-container">

        <h2 className="titulo-carousel">
            {tituloCarousel}
        </h2>

        <div className="carousel">

            <button className="btn-carousel" onClick={livroAnterior}>
                   ◀
            </button>

            <div className="janela">
                <div
                    className="track"
                    style={{
                        transform: `translateX(-${indiceAtual * ITEM_WIDTH}px)`
                    }}
                >
                    {livros.map((livro, indice) => (
                        <div className="livro" key={indice}>

                            <img
                                src={livro.imagem}
                                alt={livro.titulo}
                            />

                            <h3>{livro.titulo}</h3>

                            <p>{livro.autor}</p>

                            <div className="stars">
                                ★★★★☆

                                1100 Vendidos
                            </div>

                            <p> R$: {livro.preco.toFixed(2)}</p>

                            <button className="btn-detalhes">
                                Ver detalhes
                            </button>

                        </div>
                    ))}
                </div>
            </div>

            <button className="btn-carousel" onClick={proximoLivro}>
                ▶
            </button>

        </div>

    </div>
);
}

export default Carousel;