import styles from './Header.module.css'
import logo from '../../assets/logo.png'
import entrega from '../../assets/entrega.png'

function Header() {
  return (
     <>
    <header className={styles.headerContainer}>
      <a className={styles.logoBox}
      href='https://www.amazon.com.br/'
      target='_blank' >
      <img className={styles.logo} src={logo}
      alt="logo" />
      </a>
      <img className= {styles.entrega} src= {entrega} alt="entrega" />
      <div className={styles.barraPesquisa}>
       <select className= {styles.select} >
     <option value="Livros">Livros</option>
     <option value="Bebês">Bebês</option>
     <option value="Beleza">Beleza</option>
     <option value="Beleza de luxo">Beleza de luxo</option>
     <option value="Bolsas, Malas e Mochilas">Bolsas, Malas e Mochilas</option>
     <option value="Brinquedos e Jogos">Brinquedos e Jogos</option>
     <option value="Casa">Casa</option>
     <option value="CD e Vinil">CD e Vinil</option>
     <option value="Computadores e Informática">Computadores e Informática</option>
     <option value="Cozinha">Cozinha</option>
     <option value="Dispositivos Amazon">Dispositivos Amazon</option>
     <option value="DVD e Blu-Ray">DVD e Blu-Ray</option>
     <option value="Eletrodomésticos">Eletrodomésticos</option>
     <option value="Eletrônicos">Eletrônicos</option>
     <option value="Esportes e Aventura">Esportes e Aventura</option>
     <option value="Ferramentas e Materiais de Construção">Ferramentas e Materiais de Construção</option>
     <option value="Games">Games</option>
     <option value="Industrial">Industrial</option>
     <option value="Instrumentos Musicais">Instrumentos Musicais</option>
     <option value="Jardim e Piscina">Jardim e Piscina</option>
     <option value="Livros">Livros</option>
  </select>

  <input
    type="text"
    placeholder="Pesquisar Amazon.com.br"
    className={styles.inputPesquisa}/>

    <button className={styles.searchBtn}>
    <span className={styles.lupa}></span>
    </button>

    
</div>

<button className={styles.loginButton}>
  <span className={styles.loginText}>Olá, faça seu login</span>

  <div className={styles.loginBottom}>
    <strong>Contas e Listas</strong>
    <span className={styles.seta}>▼</span>
  </div>
</button>

<button className={styles.pedidosBtn}>
  <span>Devoluções</span>
  <strong>e Pedidos</strong>
</button>




    </header>
   <nav className={styles.menuAmazon}>
    <div className={styles.menuTodos}>
      <span className={styles.hamburguer}>☰</span>
      <strong>Todos</strong>
    </div>

    <span>Ofertas Prime Day</span>
    <span>Venda na Amazon</span>
    <span>Chega em 15 min</span>
    <span>Mais Vendidos</span>
    <span>Prime ▾</span>
    <span>Games</span>
    <span>Música</span>
    <span>Eletrônicos</span>

    <strong className={styles.ofertaDireita}>
      Ofertas imperdíveis do Prime Day
    </strong>
  </nav>
  
</>

    
  )
}

export default Header