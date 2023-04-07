import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Comment() {

    const router = useRouter()
    const todoId = router.query.todoID
    const commentID = router.query.commentsID

    return (
        <>
            <Link href={`/todos/${todoId}`}>Voltar</Link>
            <h1>Displaying the comment from the route comments:{commentID}</h1>
            <p>Da rota: {todoId}</p>
            <br />
            <br />
            {commentID === '01' && <h4>This setence belongs to comment 01</h4>}
            {commentID === '02' && <h4>This setence belongs to comment 02</h4>}
            {commentID === '03' && <h4>This setence belongs to comment 03</h4>}
        </>
    )
}

/**
 * Explicação das rotas dinâmicas:
 * 
 * nesta pasta criamos a pasta com a seguinte sintaxe entendida pelo next.js: [commentID].js
 * nesta pasta ficará os detalhes de comentários da pasta: [todoID].js
 * 
 * Qual a vantagem e a praticidade disso? 
 * com isso não precisamos nos preocupar em criar rotas, pois elas serão criadas
 * de forma dinâmica, de acordo com a necessidade do sistema, ideal para quando iremos buscar algo em API
 * 
 * Como funciona ?
 * 
 * é necessário seguir o seguinte padrão
 * 
 * 1 - crie uma pasta ex: todos
 * 
 * 2 - defina um index.js para todos
 * 
 * 3 - defina uma arquivo com colchetes, exemplo: [todoID].js (Nesse arquivo conterá as informações geral com um link de acesso a outro conteúdo
 * , no nosso caso, o conteúdo se trata apenas de comentários.)
 * 
 * 4 - crie uma pasta com a sintaxe: [todoID] e dentro de [todoID] crie uma pasta chamada: [commentsID].js (dentro de [commentsID].js 
 * que é extamente esse arquivo, ficará os contéudos adicionais que vão ser clikados pelo [todoID].js, usando o useRouter eu tenho acesso
 * as rotas q foram definidas em [todoID].js - 
 * 
 * exemplo: <Link href={`/todos/${todoId}/comments/03`}>Detalhes 03</Link>, 
 * esse /todos/ na url se refere a pasta todos
 * 
 * esse ${todoId} é o que o next gera de forma automática como identificador da rota
 * 
 * esse /comments/03 se refere á pasta criada dentro da pasta [todoID] como citado na passo '4' e o 03 é um identificador que criamos
 * usarmos ele e fazer com que apareça os conteúdos de acordo com seu ID. )
 * 
 * *********************************************************************************************************************************************
 * *********************************************************************************************************************************************
 * *********************************************************************************************************************************************
 * 
 * Explanation of dynamic routes:
 *
 * in this folder we create the folder with the following syntax understood by next.js: [commentID].js
 * in this folder expect the details of folder comments: [todoID].js
 *
 * What is the advantage and practicality of this?
 * with this we don't need to worry about creating routes, because they will be created
 * dynamically, according to the system's needs, ideal for when we are going to fetch something from the API
 *
 * How it works ?
 *
 * it is necessary to follow the following pattern
 *
 *1 - cry a folder ex:todos
 *
 * 2 - define an index.js for todos
 *
 * 3 - define a file with square brackets, example: [todoID].js (This file will contain general information with an access link to other content
 * , in our case the content is just comments.)
 *
 * 4 - create a folder with the syntax: [todoID] and inside [todoID] create a folder called: [commentsID].js (inside [commentsID].js
 * which is exactly this file, wait for the additional contents that will be clicked by [todoID].js, using useRouter I have access
 * the routes that were defined in [todoID].js -
 *
 * example: <Link href={`/todos/${todoId}/comments/03`}>Details 03</Link>,
 * this /todos/ in the url refers to the todos folder
 *
 * this ${todoId} is what the next one generates automatically as a route identifier
 *
 * this /comments/03 refers to the folder created within the [todoID] folder as mentioned in step '4' and the 03 is an identifier that it created
 * we use it and make sure the contents according to your ID. )
 * 
 */