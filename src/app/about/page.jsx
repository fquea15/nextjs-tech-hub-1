"use client"

import { useRouter, useParams } from "next/navigation"

export default function AboutPage() {
    const router = useRouter()
    return <section>
        <h1>About</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum corrupti cum aliquid, voluptatibus iure obcaecati. Repudiandae, quam, atque ipsum fugit minus sint eos, quibusdam alias dolores a cupiditate! Eveniet quia nostrum qui perferendis rem dolor magni quos eius natus! A non temporibus accusantium dignissimos! Hic impedit mollitia veniam natus ab earum libero laborum, dignissimos consequuntur corporis accusantium obcaecati officiis expedita recusandae quod cumque inventore? Nostrum veniam culpa iste quo pariatur ipsa, repellendus quos eos modi sit rem dolor deleniti repudiandae doloremque temporibus sunt omnis eaque beatae magni aspernatur aliquam ea iure autem nam! Accusantium odio vel, ipsa non consequuntur dolores!</p>
        <button className="bg-sky-400 px-3 py-2 rounded-md"
        onClick={() => {
            alert('Executing code!!!!!')
            router.push('/')
        }}
        >
            click
        </button>
    </section>
}