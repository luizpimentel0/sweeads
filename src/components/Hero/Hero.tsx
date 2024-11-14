import { Coffee } from "lucide-react";
import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <main className={styles["hero"]}>
      <section className={styles["hero-section"]}>
        <div className={styles["hero-section__title"]}>
          <h1>Bem-vindo a Sweeads</h1>
          <Coffee size={32} />
        </div>
        <div className={styles["hero-section__item"]}>
          <p className={styles["description"]}>
            A mais deliciosa padaria da cidade! Venha saborear nossos produtos
            fresquinhos e feitos com muito carinho.
          </p>

          <picture>
            <img src="/images/hero-image.jpg" alt="Padaria" />
          </picture>
        </div>
      </section>
    </main>
  );
};
