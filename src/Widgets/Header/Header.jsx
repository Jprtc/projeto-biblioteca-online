import styles from './Header.module.css'
import cartIcon from "../../../public/cart.svg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.mainBar}>
        <a href="#" className={styles.logoArea} aria-label="Amazon">
          <span className={styles.amazonText}>amazon</span>
          <span className={styles.amazonDot}>.com</span>
          <span className={styles.amazonSmile}></span>
        </a>

        <button className={styles.location} type="button">
          <span className={styles.pinIcon}></span>

          <span className={styles.locationText}>
            <span className={styles.deliveryText}>
              A entrega sera feita em Bela Vista 01319900
            </span>
            <strong>Atualizar CEP</strong>
          </span>
        </button>

        <form className={styles.searchBar}>
          <select className={styles.category} aria-label="Categoria">
            <option>Livros</option>
            <option>Kindle</option>
            <option>Audiolivros</option>
          </select>

          <input
            className={styles.searchInput}
            type="search"
            placeholder="Pesquisar livros, autores ou editoras"
            aria-label="Pesquisar"
          />

          <button className={styles.searchButton} type="submit" aria-label="Pesquisar">
            <span className={styles.searchIcon}></span>
          </button>
        </form>

        <a href="#" className={styles.account}>
          <span className={styles.smallText}>Ola, faca seu login</span>
          <strong>Conta e Listas</strong>
        </a>

        <a href="#" className={styles.orders}>
          <span className={styles.smallText}>Devolucoes</span>
          <strong>e Pedidos</strong>
        </a>

       <a href="#" className={styles.cart}>
  <div className={styles.cartWrapper}>
    <span className={styles.cartCount}>0</span>
    <img src={cartIcon} alt="Carrinho" className={styles.cartSvg} />
  </div>
  <strong>Carrinho</strong>
</a>
      </div>

      <nav className={styles.navBar} aria-label="Menu principal">
        <a href="#">Todos</a>
        <a href="#">Mais Vendidos</a>
        <a href="#">Lancamentos</a>
        <a href="#">Kindle</a>
        <a href="#">Ofertas</a>
        <a href="#">Livros Infantis</a>
        <a href="#">Romance</a>
        <a href="#">Fantasia</a>
      </nav>
    </header>
  )
}

export default Header