'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/header.module.css'
import { usePathname } from 'next/navigation'





export default function Header() {

  const pathname = usePathname();

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
    },

    {
      name: '',
      href: '/carrito'
    }
  ]

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href='/'>
          <Image src='/img/logo.svg'
            width={300}
            height={40}
            alt='imagen logotipo'
          />

        </Link>
        <nav className={styles.navegacion} >
          {
            links.map((link) => {
              return (
                <Link
                  className={pathname === link.href ? styles.active : styles.links}
                  key={link.name}
                  href={link.href}
                >
                  {link.name}

                </Link>
              )
            })
          }

          <Link

            href='/carrito'>
            <Image
              
              width={30}
              height={25}
              src='/img/carrito.png'
              alt='imagen carrito'
            />
          </Link>
        </nav>

      </div>
    </header>
  )
}
