import '../styles/globals.css'
import type { AppProps } from 'next/app'
import wrapperStore from '@/src/store'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default wrapperStore.withRedux(MyApp)
