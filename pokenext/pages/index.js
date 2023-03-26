import NavBar from "@/components/NavBar"; // modern syntax with @
//import NavBar from "../components/NavBar" // old syntaxe with @

import Image from "next/image";
import Head from "next/head";

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Main Page</title>
        <meta name="keywords" content="roupas, calçados, boné"></meta>
        <meta name="description" content="encontre roupas baratas"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>HelloO Word Next.js</h1>
        <Image
          src="/images/predio.jpg"
          width="300"
          height="300"
          alt="predio alto bonito"
        />
      </div>
    </>
  );
}
