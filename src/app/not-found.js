import Link from "next/link";

export default function NotFound() {
    return (
      <div>
        <p className="error">Pagina no encontrada</p>
        <Link className="error-enlace" href="/">Volver al Inicio</Link>
      </div>
    )
  }