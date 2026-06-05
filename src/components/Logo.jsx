import { Link } from "react-router-dom";
import styles from "./CSSModules/Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <img src="img/logo.png" alt="WorldWise logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
