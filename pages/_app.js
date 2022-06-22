import ScrollObserver from '../components/ScrollObserver'
import SizeObserver from '../components/SizeObserver'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <SizeObserver>
      <ScrollObserver>
        <Component {...pageProps} />
      </ScrollObserver>
    </SizeObserver>
  )
}

export default MyApp
