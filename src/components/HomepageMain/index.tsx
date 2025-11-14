import type { ReactNode } from "react";
import styles from "./styles.module.css";

export default function HomepageMain(): ReactNode {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <img className={styles.hyuil} src="/img/background.webp" alt="background" />
        <h1>
          Hello World! I'm <span className={styles.gradientText}>Hyuil</span>
        </h1>
      </div>
    </main>
  );
}
