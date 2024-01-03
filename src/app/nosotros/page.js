import Image from "next/image"

import styles from '../styles/nosotros.module.css'

export const metadata = {
  title: {
    default: 'nosotros',
  },
  description: 'Nosotros Page'
}



export default function NosotrosPage() {
  return (
    <main className="contenedor">
      <h2 className="heading">Nosotros</h2>

      <div className={ styles.contenido }>

        <Image
            src='/img/nosotros.jpg'
            width={1000}
            height={900}
            alt="Imagen nosotros"
        
        />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue varius urna, non blandit nisl consectetur sit amet. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi rutrum elit eu neque ultrices, at pellentesque
             massa blandit. Sed eget purus at erat placerat elementum in nec justo. Fusce sagittis ac libero quis condimentum. Nulla facilisi. Aenean sem 
             nulla, interdum ultrices dolor sed, placerat condimentum urna. Nam blandit nisi id elementum cursus. Quisque eget ante non lorem mattis 
             vestibulum vel eu ipsum. Sed eleifend sem in fermentum lacinia.

            Mauris fermentum ornare ligula, et sollicitudin nisl laoreet sed. Aliquam mi magna, aliquet ac est at, bibendum ullamcorper nisi. 
            Suspendisse varius maximus dolor, ut finibus sem congue id. Proin eu euismod ipsum. Donec eu congue urna, non porta felis. 
            Proin suscipit quam lacinia, commodo mauris ac, placerat nunc. Quisque nec tortor rutrum ex vulputate gravida nec sit amet tellus. 
            Duis accumsan leo nibh, a feugiat magna tempus finibus. Nullam leo enim, elementum ac egestas viverra, pretium ut mauris. 
            Pellentesque quis augue ut augue tempus molestie nec in justo. Donec quis velit purus.
          </p>
        </div>

      </div>


    </main>
  )
}
