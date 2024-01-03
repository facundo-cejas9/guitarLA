import { getPosts } from "./blog/page"
import Curso from "./components/curso";
import Guitarra from "./components/guitarra";
import Post from "./components/posts";
import styles from './styles/grid.module.css'


export const getGuitarritas = async () => {
  const response = await fetch(`${process.env.API_URL}/api/guitarras/?populate=*`, { cache: 'no-store' })
  const { data } = await response.json();
  return data;
}


export const getCursos = async () => {
  const response = await fetch(`${process.env.API_URL}/api/curso?populate=*`, { cache: 'no-store' })
  const { data } = await response.json();
  return data;
}


export default async function Home() {

  const guitarra = await getGuitarritas()
  const entriesBlog = await getPosts()
  const curso = await getCursos()



  return (
    <>
      <main className='contenedor'>
      <h2 className="heading">Nuestra colección</h2>
        <div className={styles.grid}>
          
          {
            guitarra.map(guitarra => (
              <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
            ))
          }
        </div>
      </main>

      <section>
        <Curso curso={ curso.attributes } />
      </section>

      <section className="contenedor">
        <h2 className="heading">Nuestros blogs</h2>
        <div className={ styles.grid }>
          {
            entriesBlog.map(post => (
              <Post post={post} key={post.id} />
            ))

          }
        </div>
      </section>
    </>

  )
}
