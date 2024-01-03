'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useCarritoContext } from '../components/context/carritoContext'
import styles from '../styles/carrito.module.css'


export default function Carrito() {

  const [total, setTotal] = useState(0)



  const { agregarCarrito, carrito, actualizarCantidad, eliminarProducto } = useCarritoContext()

  useEffect(() => {
    const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)
    setTotal(calculoTotal)
  }, [carrito])


  return (
    <main className="contenedor">
      <h1 className="heading">Carrito</h1>
      <div className={styles.contenido}>
        <div className={styles.carrito}>
          <h2>Articulos agregados</h2>
          {carrito.length === 0 ? 'Carrito Vacio' : (
            carrito.map(producto => (
              <div key={producto.id} className={styles.producto}>
                <div>
                  <Image
                    width={250}
                    height={480}
                    src={producto.imagen}
                    alt='Imagen'

                  />
                </div>
                <div>
                  <h3 className={styles.nombre}>{producto.nombre}</h3>
                  <p className={styles.cantidad}>Cantidad:</p>
                  <select value={producto.cantidad} onChange={e => actualizarCantidad({
                    id: producto.id,
                    cantidad: e.target.value
                  })} className={styles.select}>
                    
                    <option value='1'> 1 </option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                  </select>
                  <p className={styles.precio}>${producto.precio}</p>
                  <p className={styles.subtotal}>Subtotal: <span>${producto.cantidad * producto.precio}</span></p>
                </div>

                  <button  onClick={ () => eliminarProducto(producto.id) } className={ styles.eliminar } type='button'>
                  X
                  </button>
                 
              </div>
            ))
          )}
        </div>

        <aside className={styles.resumen}>
          <h3 className='heading'>Resumen del pedido</h3>
          <p className={styles.total}>Total a pagar: ${total} </p>
        </aside>

      </div>
    </main>
  )
}
