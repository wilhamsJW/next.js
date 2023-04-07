import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Comment() {

    const router = useRouter()
    const todoId = router.query.todoID
    const commentID = router.query.commentsID

    return (
        <>
            <Link href={`/todos/${todoId}`}>Voltar</Link>
            <h1>Exibindo o comentário da rota comments: {commentID}</h1>
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
 * 
 */