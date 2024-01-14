import Users from "@/components/Users"

export const metadata = {
    title: 'Mi Pagina Especial Home'
}

export default function HomePage() {
    //server component
    return <section>
        {/* client component*/}
        <Users/>
    </section>
}