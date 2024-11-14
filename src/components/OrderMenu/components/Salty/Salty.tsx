import styles from "../../OrderMenu.module.scss";

export const Salty = () => {
  return (
    <section className={styles["order-menu__item"]}>
      <ul className={styles["list"]}>
        <li>
          <span className={styles["item"]}>Coxinha</span>
          <span className={styles["price"]}>R$ 3,50</span>
        </li>
        <li>
          <span className={styles["item"]}>Esfiha</span>
          <span className={styles["price"]}>R$ 2,50</span>
        </li>
        <li>
          <span className={styles["item"]}>Torta de Frango</span>
          <span className={styles["price"]}>R$ 9,00</span>
        </li>
      </ul>
    </section>
  );
};
