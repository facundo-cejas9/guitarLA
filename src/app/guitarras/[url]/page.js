

import Image from "next/image";
import styles from '../../styles/guitarras.module.css'
import { getGuitarras } from "@/app/data/getGuitarras";
import GuitarraByUrl from "@/app/components/GuitarraByUrl";










export default async function GuitarPage({ params }) {

  const guitarra = await getGuitarras(params.url)


  // const handleSubmit = () =>{
  //     e.preventDefault()

  //     if (cantidad < 1) {
  //         alert('Cantidad no válidad');
  //         return
  //     }
  // }




  return (
    <>

      {<>
        <GuitarraByUrl
          guitarra={guitarra}
        />
      </>
      }

    </>
  )
}
