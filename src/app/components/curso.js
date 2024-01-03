'use client'

import styles from '../styles/curso.module.css'



export default function Curso({ curso }) {

    const {
        titulo,
        contenido,
        imagen: {
            data : {
                attributes : {
                    formats : {
                        large : {
                            url : imagenUrl
                        }
                    }
                }
            }
        },
    } = curso;

    

    return (
        <section className={`curso ${styles.curso}`}>
        <style jsx>{`
            .curso {
                background-image: 
                    linear-gradient( to right, rgba( 0 0 0 / .65), rgba( 0 0 0 / .7) ),
                    url( ${imagenUrl} )
            }
        `}
        </style>

        <div className={`contenedor ${styles.grid}`}>

            <div className={styles.contenido}>
            <h2 className='heading'> {titulo} </h2>
                <p className={ styles.curso__descripcion }>
                    { contenido }
                </p>
                
            </div>
        </div>

    </section>
    )
}
