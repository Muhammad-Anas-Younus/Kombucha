import Head from 'next/head'
import Header from "../components/Header"
import LandingPage from "../components/LandingPage"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kombucha - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <LandingPage/>
      <Footer/>
    </div>
  )
}
