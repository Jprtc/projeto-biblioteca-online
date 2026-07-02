import { useMemo, useState } from "react";
import styles from "./NewReleases.module.css";

import Namorado from "../../assets/Namorado.jpg";
import GuiaDaCopa from "../../assets/GuiaDaCopa.jpg";
import Erro from "../../assets/OErro.jpg";
import NemTeConto from "../../assets/NemTeConto.jpg";
import BibliotecaMeiaNoite from "../../assets/BibliotecaMeiaNoite.jpg";
import TudoeRio from "../../assets/TudoeRio.jpg";

const fallbackCover =
  "https://placehold.co/180x260/f3f3f3/111111?text=Livro";

const livros = [
  {
    title: "O erro",
    author: "Elle Kennedy",
    rating: "4,6",
    reviews: "7.267",
    format: "Livro fisico",
    price: "R$ 44,90",
    cover: Erro,
  },
  {
    title: "Nem te conto",
    author: "Luana Carolina",
    rating: "4,8",
    reviews: "1.204",
    format: "Audiolivro",
    price: "R$ 27,99",
    badge: "audible",
    cover: NemTeConto,
  },
  {
    title: "Guia da Copa",
    author: "Luiz Antonio Simas",
    rating: "4,9",
    reviews: "312",
    format: "Capa comum",
    price: "R$ 39,90",
    cover: GuiaDaCopa,
  },
  {
    title: "Namorado",
    author: "Freida McFadden",
    rating: "4,6",
    reviews: "844",
    format: "Kindle",
    price: "R$ 24,90",
    badge: "kindle",
    cover: Namorado,
  },
  {
    title: "A biblioteca da meia-noite",
    author: "Matt Haig",
    rating: "4,7",
    reviews: "18.921",
    format: "Capa comum",
    price: "R$ 36,90",
    cover: BibliotecaMeiaNoite,
  },
  {
    title: "Tudo e rio",
    author: "Carla Madeira",
    rating: "4,8",
    reviews: "21.486",
    format: "Livro fisico",
    price: "R$ 42,90",
    cover: TudoeRio,
  },
];

function NewReleases({books=livros}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const orderedBooks = useMemo(
    () => books.map((_, index) => books[(activeIndex + index) % books.length]),
    [activeIndex]
  );

  function showPrevious() {
    setDirection("prev");
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? books.length - 1 : currentIndex - 1
    );
  }

  function showNext() {
    setDirection("next");
    setActiveIndex((currentIndex) => (currentIndex + 1) % books.length);
  }

  return (
    <section className={styles.section} aria-labelledby="new-releases-title">
      <div className={styles.header}>
        <h2 id="new-releases-title" className={styles.title}>
          Novos lancamentos em Livros
        </h2>

        <a className={styles.moreLink} href="#">
          Veja mais
        </a>
      </div>

      <div className={styles.carousel} aria-label="Lista de novos livros">
        <button
          className={`${styles.navButton} ${styles.prev}`}
          type="button"
          aria-label="Anterior"
          onClick={showPrevious}
        >
          {"<"}
        </button>

        <div
          className={`${styles.cardsContainer} ${
            direction === "next" ? styles.slideNext : styles.slidePrev
          }`}
          key={activeIndex}
        >
          {orderedBooks.map((book) => (
            <article className={styles.card} key={book.title}>
              <div className={styles.coverWrap}>
                {book.badge && (
                  <span className={styles.badge}>{book.badge}</span>
                )}

                <img
                  src={book.cover}
                  alt={`Capa do livro ${book.title}`}
                  className={styles.image}
                  onError={(event) => {
                    event.currentTarget.src = fallbackCover;
                  }}
                />
              </div>

              <div className={styles.info}>
                <h3 className={styles.bookTitle}>{book.title}</h3>
                <p className={styles.author}>{book.author}</p>

                <p className={styles.rating}>
                  <span
                    className={styles.stars}
                    style={{ "--rating": Number(book.rating.replace(",", ".")) }}
                  ></span>
                  <span className={styles.ratingValue}>{book.rating}</span>
                  <span className={styles.reviews}>{book.reviews}</span>
                </p>

                <p className={styles.format}>{book.format}</p>
                <p className={styles.price}>{book.price}</p>
              </div>
            </article>
          ))}
        </div>

        <button
          className={`${styles.navButton} ${styles.next}`}
          type="button"
          aria-label="Proximo"
          onClick={showNext}
        >
          {">"}
        </button>
      </div>
    </section>
  );
}

export default NewReleases;