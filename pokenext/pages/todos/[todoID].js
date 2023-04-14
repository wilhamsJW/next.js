import Link from "next/link";
import { useRouter } from "next/router";

// next carrega essa função antes mesmo do usuário acessar esses dados, antes de chamar essa função o next já invoca ela

// context -> O parâmetro context passado para a função getStaticProps é um objeto
// que contém informações sobre a solicitação do usuário e o ambiente de
// execução, como o caminho da URL, parâmetros de consulta, cabeçalhos da solicitação, entre outras informações.

// The context -> parameter passed to the getStaticProps function is an object
// that contains information about the user request and the execution environment,
// such as the URL path, query parameters, request headers, and other information.

// getStaticProps acessa um por um
// fazendo a leitura total dos dados
export async function getStaticProps(context) {
  const { params } = context; // capture todoId

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoID}`
  );

  const todo = await data.json(); // transferring the data to json because it comes as text

  // this return is default for next, as well the function name getStaticProps()
  // getStaticProps() -> function to make api call
  return {
    props: { todo },
  };
}

// getStaticPaths acessa todos
// fazendo a renderiação individual de cada página
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  const data = await res.json();

  // O next espera que passemos todos os paths pra ele para q ele possa
  // pré renderizar as pages, e fazemos isso abaixo
  // todoID dentro do params tem que ser igual o nome do arquivo
  const paths = data.map((todo) => {
    return {
      params: {
        todoID: `${todo.id}`,
      },
    };
  });

  return { paths, fallback: false }; // quando colocado como true deu erro no buildin
  // fallback -> false: so conhece as rotas carregadas no build
  // fallback -> true: o Next.js gera a página dinamicamente no momento em que ela é acessada pelo usuário e também adiciona a página gerada em cache para ser reutilizada em solicitações futuras.

//   Porém, é importante lembrar que o fallback true pode levar a uma piora no desempenho, já que o Next.js precisa gerar a página dinamicamente a 
//   cada solicitação do usuário. Além disso, se o usuário acessar uma página que ainda não foi gerada pelo Next.js, ele pode ver um carregamento 
//   mais lento ou uma página em branco.

//  Caso você esteja utilizando fallback true, é recomendado adicionar um componente de carregamento ou uma mensagem de "carregando" na página
//  enquanto o Next.js gera a página dinamicamente.
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
          Using getStaticProps
          <br />
          <br />
        </h4>
        <br />
        <br />
        <h4>Exibindo o ID da página criada: {todo.id}</h4>
        <br />
        <br />
        <p>
          Text Dinãmico pego da API: {todo.title} <br />
          <br />
          <Link href={`/todos/${todoId}/comments/01`}>
            Detalhes -- {todoId}
          </Link>
          {/**esse /todos/ na url se refere a pasta todos */}
        </p>
        <br />
      </Link>
    </>
  );
}
