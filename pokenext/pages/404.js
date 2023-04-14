import Link from 'next/link'

export default function NotFound() {
    return (
        <>
            <h1>404</h1>
            <p>It looks like this page doesn &apos t exist!</p>
            {/** &apos -> Siginifica uma aspas simples,o next não permite que tenha aspas simples no html e no lugar das aspas simples usamos esse código */}
            <Link href="/">Voltar</Link>
        </>
    )
}