import NavBar from "@/components/NavBar"; // modern syntax with @
//import NavBar from "../components/NavBar" // old syntaxe with @

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Main Page</title>
        <meta name="keywords" content="roupas, calçados, boné"></meta>
        <meta name="description" content="encontre roupas baratas"></meta>
      </Head>
      <div >
        <h1>HelloO Word Next.js</h1>
      </div>
    </>
  );
}
