// aqui será criado rotas dinâmicas com a ajuda do Next.js
// as vezes no nosso sistemas precisamos criar rotas de forma dinâmica
// sem a necessidade de um dev estar lá atualizando as rotas

// para q isso acontece o primeiro passo é: criar um arquivo com colchetes
// igual esse q estamos acessando: [todos].js - esta é a sintaxe para q o
// next.js entenda q se trata de um arquivo dinâmico
// mais explicações dentro do HTML

import Link from "next/link";
import { useRouter } from "next/router";

/** IGNORE THE BRS - THE FOCUS HERE IS NEXT.JS */

export default function Todo() {
  const router = useRouter();
  const todoId = router.query.todoID;
  console.log("dentor do todoID", todoId);
  return (
    <>
      <Link href={"/"}>
        Voltar
        <br />
        <br />
        <h4>
          isso irá criar uma rota com o nome: todos/1, e se colocarmos um 2
          manualmente
          <br />
          na URL irá criar outra página e assim suscivamente
        </h4>
        <br />
        <br />
        <h4>Exibindo o ID da página criada: {todoId}</h4>
        <br />
        <br />
        <p>
          Comentários 01: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt... <br />
          <br />
          <Link href={`/todos/${todoId}/comments/01`}>Detalhes 01</Link>
        </p>
        <br />
        <br />
        <p>
          Comentários 02: "Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
           sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt... <br />
          <br />
          <Link href={`/todos/${todoId}/comments/02`}>Detalhes 02</Link>
        </p>
        <br />
        <br />
        <p>
          Comentários 03: "Lorem ipsum dolor sit amet, consectetur adipiscing
         in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt... <br />
          <br />
          <Link href={`/todos/${todoId}/comments/03`}>Detalhes 03</Link>
        </p>
      </Link>
    </>
  );
}
