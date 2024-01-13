import Navbar from "@/components/Navbar"
import {
  Roboto
} from "next/font/google"
import "./globals.css"

export const metadata = {
  title: "Mi tienda con Nextjs",
  description: "Esta es la pagina principal de mi tienda",
  keywords: "tienda, online, ecommerce",

}

const roboto = Roboto(
  {
    weight: ["300", "400", "500", "700"],
    style: ["italic", "normal"],
    subsets: ["latin"]
  }
)

export default function RootLayaout({ children }) {
  return <html>
    <body className={roboto.className}>
      <Navbar/>
      {children}
    </body>
  </html>
}