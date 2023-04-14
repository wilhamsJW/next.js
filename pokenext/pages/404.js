import Link from 'next/link'

export default function NotFound() {
    return (
        <>
            <h1>404</h1>
            <p>It looks like this page doesn't exist!</p>
            <Link href="/">Voltar</Link>
        </>
    )
}