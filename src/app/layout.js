import { CarritoProvider } from './components/context/carritoContext'
import Footer from './components/footer'
import Header from './components/header'
import { outfit } from './fonts'

import './globals.css'

export const metadata = {
  title: {
    default: 'Inicio',
    // a default is required when creating a template
  },
  description: 'Inicial Page'
}
export default function RootLayout({ children }) {
  return (

    <html lang="en">

      <body className={outfit.className}>
        <Header />

        <CarritoProvider>

          {children}

        </CarritoProvider>

        <Footer />
      </body>



    </html>
  )
}
