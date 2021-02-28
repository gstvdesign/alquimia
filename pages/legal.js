import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Legal = () => {
  return <div>
    <Head>
      <title>ALQUIMIA PHARMA NUTRITION</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main>
      <h2 id="registros">Registros</h2>
      <p>Nome Fantasia - Alquimia Pharma Nutrition </p>
      <hr/>
      <p>Razão Social - La Pharmacie </p>
      <p>Rua 1822, 400 Sala 01 - Centro - Balneário Camboriú - SC -Cep: 88.330-484</p>
      <p>CNPJ - 22.089.761/0001-02</p>
      <p>Inscrição Estadual - 257.601.767</p>
      <hr/>
      <p>Farmacêutica Responsável - CRF SC Andreza Diegoli Rosini - 5057</p>
      <p>Farmacêutica Responsável - CRF SC Aline Leal Lessa - 16320</p>
      <hr/>
      <p>Conselho Regional de Farmácia Santa Catarina - Cadastro 13.490</p>
      <hr/>
      <p>Alvará Sanitário - 21520</p>
      <p>Alvará de Licença e Localização - 161467</p>
      <hr/>
      <p>Autorização de Funcionamento - 7.40.470-10</p>
      <p>Autorização Especial - 1.14.687-6</p>
    </main>

    <Footer />
  </div>
}

export default Legal