import NavBar from "./NavBar";
import Footer from "./Footer";
import styles from "../styles/MainContainer.module.css";

// explicações sobre este children no arquivo _app.tsx
export default function MainContainer({ children }) {
  return (
    <>
      <NavBar />
        <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
}
