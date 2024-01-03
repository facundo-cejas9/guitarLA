'use client'

import {  useState } from "react"
import styles from '../styles/guitarras.module.css'
import Image from "next/image"
import { useCarritoContext } from "./context/carritoContext"
import { useRouter } from "next/navigation"


export default function GuitarraByUrl({ guitarra }) {



    const [cantidad, setCantidad] = useState(0)
    const { nombre, descripcion, imagen, precio } = guitarra[0].attributes
    const { agregarCarrito, carrito } = useCarritoContext()
    const router = useRouter()

    

    const handleSubmit = (e) => {
        e.preventDefault()

        if (cantidad < 1) {
            alert('error')
            return
        }

        const guitarraSeleccionada = {
            id: guitarra[0],
            imagen: imagen.data.attributes.formats.medium.url,
            nombre,
            precio,
            cantidad
        }
        agregarCarrito(guitarraSeleccionada)
        router.push('/carrito')
        
    }

    //Crear objeto de guitarra

   



    return (
        <div className={styles.guitarra}>
            <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`imagen guitarra ${nombre}`} />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
                <form onSubmit={handleSubmit} className={styles.formulario}>
                    <label htmlFor="cantidad">Cantidad:</label>
                    <select value={cantidad} id="cantidad" onChange={e => setCantidad(+e.target.value)}>
                        <option value='0'>-- Seleccione --</option>
                        <option value='1'> 1 </option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                    </select>
                    <input
                        type="submit"
                        value='Agregar al carrito'
                    />
                </form>
            </div>
        </div>
    )
}
