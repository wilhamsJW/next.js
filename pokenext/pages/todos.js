import styles from '../styles/Todos.module.css'

// next carrega essa função antes mesmo do usuário acessar esses dados, antes de chamar essa função o next já invoca ela
export async function getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    const all = await data.json() // transferring the data to json because it comes as text

    // this return is defaul for next, as well the function name getStaticProps()
    // getStaticProps() -> function to make api call
    return {
        props: {all}
    }

}

// ao trocar de página os dados já estão pré renderizados isso trás velocidade
// a página e melhora o rankeamento do google do site
// SEO torna-se mais eficiente

export default function Todos({all}) {
    return (
        <>
            <h1>Tarefas para fazer</h1>
            <ul className={styles.todolist}>
                {all.map((e) => ( 
                    <li key={e.id}>{e.title}fff</li>
                ))}
            </ul>
        </>
    )
}