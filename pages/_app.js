import '@/styles/globals.css'
import { Poppins } from '@next/font/google'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <AnimatePresence>
        <main className={poppins.className}>
          <Head>
            <link rel="shortcut icon" href="assets/dance.png" />
            <title>Gym baram</title>
          </Head>
          <Component {...pageProps} />
        </main>
      </AnimatePresence>
    </ThemeProvider>
  )
}
