import Link from "next/link"
import styles from '../styles/footer.module.css'

const links = [
  {
    name: 'Inicio',
    href: '/'
  },
  {
    name: 'Nosotros',
    href: '/nosotros'
  },
  {
    name: 'Blog',
    href: '/blog'
  },
  {
    name: 'Tienda',
    href: '/tienda'
  }
]



export default function Footer() {
  return (
    <footer className={ styles.footer }>
      <div className={ `contenedor ${styles.contenido}` }>
        <nav className={ styles.navegacion } >
          {
            links.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={ styles.links }
                >
                  {link.name}

                </Link>
              )
            })
          }
        </nav>
        <p className={ styles.copyright }>Todos los derechos reservados {new Date().getFullYear()}.</p>
      </div>
    </footer>
  )
}
