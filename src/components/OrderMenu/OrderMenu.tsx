import { Utensils } from "lucide-react";
import { Candy } from "./components/Candy";
import { Route, Routes } from "react-router-dom";
import styles from "./OrderMenu.module.scss";
import { Salty } from "./components/Salty";

export const OrderMenu = () => {
  return (
    <section className={styles["order-menu"]}>
      <div className={styles["order-menu__title"]}>
        <h2>Nosso Cardápio </h2>
        <Utensils />
      </div>
      <div className={styles["order-menu__content"]}>
        <Routes>
          <Route path="/" element={<Candy />} />
          <Route path="/salgados" element={<Salty />} />
        </Routes>
      </div>
    </section>
  );
};
