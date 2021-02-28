import { useRouter }  from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Product.module.css'
import Produtos from '../../public/data.js'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const produtoPage = () => {
  const router = useRouter()
  const { slug } = router.query

  let single = Produtos.filter(( produto ) => {
    return produto.Slug === slug
  })
  console.log(single)
  return (
  <div className={styles.container} >
    <Head>
      <title>{slug}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
      <main>
        {single.map( (i)  => {
            const { IdProduto, Nome, Preco, Res, Desc, Slug, Tipo } = i
            return <div className={styles.produto} key={IdProduto}>
              <h1>{Nome}</h1>
              <h2 className={styles.preco}>R$ {Preco}</h2>
              <div className={styles.tease}>
                <Image src={`/produtos_img/${Slug}.png`} width={400} height={400} alt={Nome}/>
                <div className={styles.teasecontent}>
                  <span className={styles.pill}>{Tipo}</span>
                  <ul dangerouslySetInnerHTML={{__html: Res}} />
                </div>
              </div>
              <h2>Sobre {Nome}</h2>
              <div dangerouslySetInnerHTML={{ __html: Desc}} />
            </div>
        })}
      </main>
  
    <p className={styles.link}><a href="/">Ver outros produtos</a></p>

    <Footer />
  </div>)
}


export default produtoPage