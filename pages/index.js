import Head from 'next/head'
import CanvasBgGradient from '../components/CanvasBgGradient'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Works from '../components/Works'

export default function Home() {
  return (
    <>
      <Head>
        <title>Laurent Treuil | Portfolio 2022</title>
        <meta name="description" content="Here is my brand new portfolio for 2022 as a Front-End Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CanvasBgGradient />
      <AboutMe />
      <Skills />
      <Works />
    </>
  )
}
