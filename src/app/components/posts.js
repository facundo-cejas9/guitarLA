import Image from "next/image"
import styles from '../styles/blog.module.css'
import Link from "next/link"
import { formatearFecha } from "../../../utils/helper"


export default function Post({ post }) {

    const {
        titulo,
        publishedAt,
        contenido,
        url,
        imagen: { data: { attributes: { url: imagenUrl } } }
    } = post.attributes

    return (
        <main >
            <div className={styles.contenido}>
            <Image
                src={imagenUrl}
                width={500}
                height={900}
                alt={`imagen del blog ${titulo}`}


            />

            

                <h2 className="heading"> {titulo} </h2>
                <p className={styles.fecha}> {formatearFecha(publishedAt)} </p>
                <p className={styles.resumen}> {contenido} </p>
                
            </div>
            <Link className={ styles.enlace } href={ `/blog/${url}` }>
                Leer post
            </Link>
        </main>
    )
}
