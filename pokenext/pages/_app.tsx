import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import MainContainer from '../components/MainContainer'

/**
 * TODAS AS PÁGINAS ANTES DE SEREM RENDERIZADAS PASSAM POR ESTE ARQUIVO
 * 
 * ALL PAGES GO TROUGH THIS FILE BEFORE BEING RENDERED
 */

/**
 * AppProps -> é o tipo dado pelo next, sem ele, a página funcionará mas o vscode 
 * dará um erro de sintaxe
 * 
 * Component dentro da função App -> se trata de todos os componentes q irão ser
 * renderizados dentro da página, como todas as páginas são criadas através
 * de pages, o next já entende isso e passa todas as páginas por esse 
 * component
 * 
 * pageProps -> é justamente as propriedades de uma página criada
 * q irão ser renderizadas, por isso colocamos ela dentro de component
 * assim: <Component {...pageProps} />
 * 
 * MainContainer -> se trata de uma NavBar construída q engloba todas as pages
 * dentro de MainContainer temos uma prop chamda children (verifique no arquivo)
 * e essa prop é colocada dentro de uma div pq é o reflexo deste: <Component {...pageProps} />
 * MainContainer entende que tem um componente filho e usa ele
 */

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  )
}
