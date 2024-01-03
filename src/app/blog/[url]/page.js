import Image from "next/image";
import styles from '../../styles/blog.module.css'
import { formatearFecha } from "../../../../utils/helper";




export const getPostByUrl = async ( url ) => {
    const response = await fetch(`${process.env.API_URL}/api/posts?filters[url]=${url}&populate=*`)
    const { data } = await response.json();
    return data;
}



export async function generateMetadata(params) {
    return {
        title: `Blog | ${params.url}`
    }

}

export default async function BlogPage({ params }) {

    const posts = await getPostByUrl(params.url)

    const { titulo, contenido, url, createdAt, imagen:{ data: { attributes: { url: imagenUrl } } } } = posts[0].attributes;



  return (
    <article className={ `${styles.post} ${styles['mt-3']}` }>
        <Image 
            src={ imagenUrl }
            width={1000}
            height={600}
            alt={ `imagen del blog ${titulo}` }
            className=""
        />
        <div className={ styles.contenido }>
            <h3> { titulo } </h3>
            <p className={ styles.fecha }> { formatearFecha(createdAt) } </p>
            <p className={ styles.contenido }> { contenido } </p>
           
        </div>
    </article>
  )
}

