import Image from 'next/image'
import React from 'react'
import styles from '../styles/guitarras.module.css'
import Link from 'next/link'

export default function Guitarra({guitarra}) {

const { descripcion,imagen, precio, url, nombre } = guitarra

  return (
    <div className={styles.guitarra}>
        <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`imagen guitarra ${nombre}`} />
        <div className={styles.contenido}>
            <h3>{ nombre }</h3>
           <p className={ styles.descripcion }>{ descripcion }</p>
           <p className={styles.precio}>${ precio }</p>
           <Link className={ styles.enlace } href={`/guitarras/${url}`}>
              Ver producto
           </Link>
        </div>
    </div>
  )
}
