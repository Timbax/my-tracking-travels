import styles from "./CSSModules/Sidebar.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by Dany White Inc.
      </p>
    </footer>
  );
}
