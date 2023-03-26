import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

//import styles from '../styles'

export default function Home() {
  return (
    <div >
      <ul>
        <li>
          <Link href="/products">Ir para páginas de Produtos
          - Seguindo o padrão de SPA que um deles é sem page reload
          Ele trafega entre arquivos pré renderizados
          </Link>
        </li>
        <li>
        <Link href="/about">Ir para página About
          </Link>
        </li>
      </ul>
      <h1>HelloO Word Next.js</h1>
    </div>
  )
}
