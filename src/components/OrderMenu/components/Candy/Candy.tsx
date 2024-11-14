import styles from "../../OrderMenu.module.scss";

export const Candy = () => {
  return (
    <section className={styles["order-menu__item"]}>
      <ul className={styles["list"]}>
        <li>
          <span className={styles["item"]}>Alfajor 100g</span>
          <span className={styles["price"]}>R$ 5,50</span>
        </li>
        <li>
          <span className={styles["item"]}>Mousse</span>
          <span className={styles["price"]}>R$ 7,50</span>
        </li>
        <li>
          <span className={styles["item"]}>Torta Escocesa</span>
          <span className={styles["price"]}>R$ 12,00</span>
        </li>
      </ul>
    </section>
  );
};
