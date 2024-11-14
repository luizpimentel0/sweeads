import { BriefcaseBusiness, Candy, Phone, Pizza, Truck } from "lucide-react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <nav className={styles["header-nav"]}>
        <ul className={styles["header-nav__list"]}>
          <li>
            <Link to="/doces">
              <span>Doces</span>
              <Candy size={20} />
            </Link>
          </li>
          <li>
            <Link to="/salgados">
              Salgados
              <Pizza size={20} />
            </Link>
          </li>
          <li>
            <a href="#">
              Encomendas
              <Truck size={20} />
            </a>
          </li>
          <li>
            <a href="#">
              Contato
              <Phone size={20} />
            </a>{" "}
          </li>
          <li>
            <a href="#">
              Trabalhe Conosco
              <BriefcaseBusiness size={20} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
