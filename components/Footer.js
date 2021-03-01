import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineWhatsApp, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.item}>
          <h2 id="atendimento">Atendimento</h2>
          <p>Telefone:</p>
          <p className={styles.bigger}><AiOutlinePhone /> (47) 2033-0141</p>
          <p>Whatsapp:</p>
          <p className={styles.bigger}><a href="https://api.whatsapp.com/send?phone=554720330141">
            <AiOutlineWhatsApp /> (47) 2033-0141
          </a></p>
          <p>E-mail: </p>
          <p className={styles.bigger}><a href="mailto:contato@alquimiamanipulacao.com.br">
            <AiOutlineMail /> contato@alquimiamanipulacao.com.br
          </a></p>
        </div>
        <div className={styles.item}>
          <h2 id="sobre-n-s">Sobre Nós</h2>
          <p>Alquimia Pharma Nutrition - Rua 1822, 400 - Sala 01 - Centro - Balneário Camboriú/SC - 88330-484</p>
          <p>CNPJ: 22.089.761/0001-02 © </p>
          <p>Todos os direitos reservados.2021 </p>
          <h2>Horário de Atendimento</h2>
          <p>seg à sex - 8h00 às 19h00</p>
          <p>sab - 8h00 às 13h00</p>
          <h2><a href="/legal">Registros</a></h2>
        </div>
        <div className={styles.item}>
          <Image src="/logo.png" width={150} height={32} />
          <h2>Segue a gente!</h2>
          <p className={styles.social}>
            <a href="https://www.facebook.com/alquimiapharmanutrition/"><AiOutlineFacebook /></a>
            <a href="http://www.instagram.com/alquimiapharmanutrition"><AiOutlineInstagram /></a>
          </p>
        </div>
      </div>
    </footer>
    )
}

export default Footer