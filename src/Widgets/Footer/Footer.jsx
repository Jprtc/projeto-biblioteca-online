
import styles from './Footer.module.css';
import logoAmazon from '../../assets/amazon-logo.png';
import bandeiraBR from '../../assets/bandeira-do-brasil.png';

function Footer() {

  return (
    
    <footer className={styles.footerContainer}>
         <div className={styles.backToTop}>Voltar ao início</div>
      <div className={styles.columns}>
        <div>
        <h4>Conheça-nos</h4>
        <a href="#">Sobre a Amazon</a>
        <a href="#">Informações Corporativas</a>
        <a href="#">Carreiras</a>
        <a href="#">Comunicados à imprensa</a>
        <a href="#">Comunidade</a>
        <a href="#">Acessibilidade</a>
        <a href="#">Amazon Science</a>
        </div>
        <div>
        <h4>Ganhe Dinheiro Conosco</h4>
        <a href="#">Venda na Amazon</a>
        <a href="#">Proteja e construa a sua marca</a>
        <a href="#">Forneça para a Amazon</a>
        <a href="#">Publique seus livros</a>
        <a href="#">Seja um associando</a>
        <a href="#">Anuncie seus produtos</a>
        </div>
        <div>
        <h4>Pagamento</h4>
        <a href="#">Meios de Pagamento</a>
        <a href="#">Compre com Pontos</a>
        <a href="#">Cartão de crédito Amazon</a>
        </div>
        <div>
        <h4>Deixe-nos ajudar você</h4>
        <a href="#">Sua conta</a>
        <a href="#">FRete e prazo da entrega</a>
        <a href="#">Devoluções e reembolso</a>
        <a href="#">Gerencie seu conteúdo e dispositivos</a>
        <a href="#">Recalls e alertas de segurança do produto</a>
        <a href="#">Ajuda</a>
        </div>
</div>
<div className={styles.footerButton}>
  <div className={styles.bottomContent}>
      <img src={logoAmazon} className={styles.logo} />
        <button className={styles.countryButton}>
        <img src={bandeiraBR} className={styles.flagIcon} />
        Brasil</button>
      </div>
<div className={styles.copyright}>
  <a href="#">Condições de Uso</a>
   <a href="#">Notificação de Privacidade</a>
    <a href="#">Cookies</a>
     <a href="#">Anuncios Baseados em Interesses</a>
     <p>2021-2026 Amazon.com, Inc. ou suas afiliadas</p>
     <div className={styles.CorporateInfo}>
      <p>Amazon Serviços de Varejo do BrasilLtda. | CNPJ 15.436940/0001-03</p>
     <p>
      
      Av. Juscelino Kubitschek, 2041, Torre E, 18° anda - São Paulo CEP: 04543-011 |
      Fale Conosvo | ajuda-amazon@amazon.com.brasil 
      </p>
      <p>
        Formas de pagamento aceitas: cartões de crédito (Visa, MasterCard, Elo e American Express),
        cartões de débito (Visa e Elo), Boleto e Pix.
      </p>
     </div>
      </div>
      </div>

    </footer>
  )
}

export default Footer
