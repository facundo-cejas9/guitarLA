import Post from "../components/posts";
import styles from '../styles/grid.module.css'


export const getPosts = async () => {
  const response = await fetch(`${process.env.API_URL}/api/posts?populate=imagen`, {cache:'no-store'})
  const { data } = await response.json()
  return data;
}


export const metadata = {
    title: {
        default: 'Blog',
    },
    description: 'Blog de guitarLA'
  }

export default async  function Blog() {

  const entriesBlog = await getPosts()

  
  return (
    <div className={ styles.grid }>
    
     {
      entriesBlog.map(post => (
        <Post post={ post } key={ post.id } />
      ))
     }
        
    </div>
  )
}
