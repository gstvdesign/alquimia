import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
  return (
  <div className="container">
    <Head>
      <title>Sobre a ALQUIMIA PHARMA NUTRITION</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header />
    <main>
      <h1>Quem somos</h1>
      
      <p>ALQUIMIA PHARMA NUTRITION é uma empresa voltada ao segmento nutricional farmacêutico magistral, que tem como compromisso a saúde, qualidade de vida e bem estar de nossos clientes prezando sempre pela qualidade em seus produtos bem como, em seus serviços de forma ética e profissional.</p>
      <p>A visão da ALQUIMIA PHARMA NUTRITION é sempre oferecer produtos de qualidade e de procedência, produtos estes certificados pela ANVISA.</p>
      <p>Obedecemos e cumprimos a todas as normas legais em vigor, garantindo assim a procedência em todos os seus produtos. Priorizando acima de tudo a saúde, bem estar e qualidade de vida de nossos clientes.</p>
      <p>Nosso principal valor é oferecer um atendimento personalizado com total respeito, dedicação e clareza. Com o compromisso de sempre buscar a perfeição no requisito qualidade em nossos produtos e atendimento ao cliente.</p>
    </main>

    <Footer />
  </div>

  )
}

export default About