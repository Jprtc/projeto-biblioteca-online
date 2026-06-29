import { useState } from "react";
import "./Carousel.css";


import foto1 from "../../assets/ascensao.png";
import foto2 from "../../assets/depoisdasbrasas.png";
import foto3 from "../../assets/devoradoresdeestrelas.png";
import foto4 from "../../assets/estudodospardais.png";
import foto5 from "../../assets/herdeirasdomar.png";
import foto6 from "../../assets/ovilarejo.png";
import foto7 from "../../assets/salvospeloamor.png";
import foto8 from "../../assets/todasasmentiras.png";
import foto9 from "../../assets/umpequenodescuido.png";

const livros = [

    {
        imagem: foto1,
        titulo: "Ascensão",
        autor: "Autor 1",
        preco: "R$ 49,90",
        rating: 4.8,
    },
    {
        imagem: foto2,
        titulo: "Depois das Brasas",
        autor: "Autor 2",
        preco: "R$ 54,90",
        rating: 4.5,
    },
    {
        imagem: foto3,
        titulo: "Devoradores de Estrelas",
        autor: "Autor 3",
        preco: "R$ 39,90",
        rating: 4.9,
    },
    {
        imagem: foto4,
        titulo: "Estudo dos Pardais",
        autor: "Autor 4",
        preco: "R$ 42,90",
        rating: 4.2,
    },
    {
        imagem: foto5,
        titulo: "Herdeiras do Mar",
        autor: "Autor 5",
        preco: "R$ 59,90",
        rating: 4.7,
    },
    {
        imagem: foto6,
        titulo: "O Vilarejo",
        autor: "Autor 6",
        preco: "R$ 34,90",
        rating: 4.6,
    },
    {
        imagem: foto7,
        titulo: "Salvos pelo Amor",
        autor: "Autor 7",
        preco: "R$ 44,90",
        rating: 4.3,
    },
    {
        imagem: foto8,
        titulo: "Todas as Mentiras",
        autor: "Autor 8",
        preco: "R$ 51,90",
        rating: 4.4,
    },
    {
        imagem: foto9,
        titulo: "Um Pequeno Descuido",
        autor: "Autor 9",
        preco: "R$ 47,90",
        rating: 4.8,
    },
];
    

function Carousel() {
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
            Livros em Oferta
        </h2>

        <div className="carousel">

            <button onClick={livroAnterior}>
                Anterior
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

                            <p>{livro.preco}</p>

                            <button className="btn-detalhes">
                                Ver detalhes
                            </button>

                        </div>
                    ))}
                </div>
            </div>

            <button onClick={proximoLivro}>
                Próximo
            </button>

        </div>

    </div>
);
}

export default Carousel;