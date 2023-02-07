import '@/styles/globals.css'
import { Poppins } from '@next/font/google'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <main className={poppins.className}>
        <Head>
          <link rel="shortcut icon" href="assets/dance.png" />
          <title>Home</title>
        </Head>
        <Component {...pageProps} />
      </main>
    </AnimatePresence>
  )
}
