import { Utensils } from "lucide-react";
import { Candy } from "./components/Candy";
import { Route, Routes } from "react-router-dom";
import styles from "./OrderMenu.module.scss";

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
          <Route path="/salgados" element={<h1>Salgados</h1>} />
          <Route path="/salgados/salgado-1" element={<h1>Salgado 1</h1>} />
        </Routes>
      </div>
    </section>
  );
};
