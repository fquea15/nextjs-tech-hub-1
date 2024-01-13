import Link from "next/link";

export default function NotFound(){
    return(
        <section>
            <h1>404</h1>
            <p>Pagina no encontrado</p>
            <Link href="/">Home</Link>
        </section>
    )
}