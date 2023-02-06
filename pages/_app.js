import '@/styles/globals.css'
import { Poppins } from '@next/font/google'
import { AnimatePresence } from 'framer-motion'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </AnimatePresence>
  )
}
