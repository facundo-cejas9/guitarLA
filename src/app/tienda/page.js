import Guitarra from "../components/guitarra"
import styles from '../styles/grid.module.css'



export const metadata = {
  title: {
    default: 'Tienda',
  },
  description: 'Tienda Virtual de guitar LA'
}

const getGuitarras = async () => {
  const response = await fetch(`${process.env.API_URL}/api/guitarras?populate=imagen`)
  const { data } = await response.json()
  console.log(data)
  return data

}




export default async function Tienda() {

  const guitarras = await getGuitarras()

  return (
    <main className="contenedor">
      <h2 className="heading">Nuestra Colección</h2>
      <div className={styles.grid}>
        {
          guitarras.map(guitarra => (
            <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
          ))
        }
      </div>


    </main>
  )
}


