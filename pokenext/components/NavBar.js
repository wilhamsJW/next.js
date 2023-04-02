import Link from 'next/link'

import styles from '../styles/Navbar.module.css'

export default function NavBar() {
  return (
    <>
      <ul className={styles.navbar}>
        <li>
          <Link href="/products">
            Ir para páginas de Produtos - 
            (Seguindo o padrão de SPA que um deles
            é sem page reload Ele trafega entre arquivos pré renderizados)
          </Link>
        </li>
        <li>
          <Link href="/about">Ir para página About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/todos">Todos API - Usando API NEXT</Link>
        </li>
        <li>
          <Link href="/todos/1">CRIANDO ROTAS DINÂMICAS</Link>
        </li>
      </ul>
    </>
  );
}
