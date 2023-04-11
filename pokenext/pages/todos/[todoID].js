import Link from "next/link";

// next carrega essa função antes mesmo do usuário acessar esses dados, antes de chamar essa função o next já invoca ela

// context -> O parâmetro context passado para a função getStaticProps é um objeto
// que contém informações sobre a solicitação do usuário e o ambiente de
// execução, como o caminho da URL, parâmetros de consulta, cabeçalhos da solicitação, entre outras informações.

// The context -> parameter passed to the getStaticProps function is an object
// that contains information about the user request and the execution environment,
// such as the URL path, query parameters, request headers, and other information.

export async function getStaticProps(context) {
  const { params } = context; // capture todoId

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoID}`
  );

  const all = await data.json(); // transferring the data to json because it comes as text

  // this return is default for next, as well the function name getStaticProps()
  // getStaticProps() -> function to make api call
  return {
    props: { all },
  };
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  const data = await res.json();

  const paths = data.map((todo) => {
    return {
      params: {
        todoId: `${todo.id}`,
      },
    };
  });

  return { paths, fallback: true }
  // fallback -> false: so conhece as rotas carregadas no build
  // fallback -> true: o Next.js gera a página dinamicamente no momento em que ela é acessada pelo usuário e também adiciona a página gerada em cache para ser reutilizada em solicitações futuras.
}

export default function Todo({ todo }) {
  const router = useRouter();
  const todoId = router.query.todoID;

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
          Comentários 01: "Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt... <br />
          <br />
          <Link href={`/todos/${todoId}/comments/01`}>Detalhes 01</Link>
          {/**esse /todos/ na url se refere a pasta todos */}
        </p>
        <br />
        <br />
        <p>
          Comentários 02: "Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt...{" "}
          <br />
          <br />
          <Link href={`/todos/${todoId}/comments/02`}>Detalhes 02</Link>
        </p>
        <br />
        <br />
        <p>
          Comentários 03: "Lorem ipsum dolor sit amet, consectetur adipiscing in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt... <br />
          <br />
          <Link href={`/todos/${todoId}/comments/03`}>Detalhes 03</Link>
        </p>
      </Link>
    </>
  );
}
