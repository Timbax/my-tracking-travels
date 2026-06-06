import styles from "./CSSModules/Sidebar.module.css";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Sidebar() {
  return (
    <div className={styles.Sidebar}>
      <Nav />
      <p>List of cities</p>

      <Footer />
    </div>
  );
}
