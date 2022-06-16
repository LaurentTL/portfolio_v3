import ScrollObserver from '../components/ScrollObserver'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <ScrollObserver>
      <Component {...pageProps} />
    </ScrollObserver>
  )
}

export default MyApp
