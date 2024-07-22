import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ArcadeMachine from '@components/ArcadeMachine'
import '@styles/ArcadeMachine.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <ArcadeMachine />
      </main>

      <Footer />
    </div>
  )
}
