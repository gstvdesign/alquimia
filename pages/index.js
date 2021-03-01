import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Produtos from '../public/data.js'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ALQUIMIA PHARMA NUTRITION</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header />

        <div className={styles.hero}>
          <img src="../public/hero.png" alt=""/>
        </div>

        <main className={styles.main}>

        <div className={styles.new}>
          <h1>Estamos mudando…</h1>
          <p>Nossa loja vai mudar.</p>
          <p>Enquanto preparamos tudo para você ter a melhor experiência e continuar dentro dos seus objetivos, você pode falar com a gente pelos nossos canais de contato:</p>
          <p> Telefone: (47) 2033-0141 <a href=""></a></p>
          <p> <a href="https://api.whatsapp.com/send?phone=554720330141">Whatsapp: (47) 2033-0141</a></p>
          <p><a href="mailto:contato@alquimiamanipulacao.com.br">E-mail: contato@alquimiamanipulacao.com.br</a></p>
        </div>
        <div className={styles.grid}>
          {Produtos.map((produto) => {
            return <Link href={`produtos/${produto.Slug}`}>
              <a className={styles.card}>
                <span className={styles.pill}>{produto.Tipo}</span>
                <Image src={`/produtos_img/${produto.Slug}.png`} width={200} height={200} />
                <h3>{produto.Nome}</h3>
                <p className={styles.price}>R$ {produto.Preco}</p>
                <p className={styles.parcelas}>Em até {produto.Parcelas}X de R$ {Math.round(produto.Preco/produto.Parcelas * 100 + Number.EPSILON)/100}</p>
                <button>Mais informações…</button>
              </a>
            </Link>
            })
          }
        </div>
      </main>

      <Footer />
    </div>
  )
}
