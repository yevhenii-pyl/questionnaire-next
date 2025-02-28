import Link from "next/link";

import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Ooops...Looks like there is no such question
      </h2>
      <p className={styles.subtitle}>Let`s start from the beginning!</p>
      <Link href="/" className={styles.button}>
        Start
      </Link>
    </div>
  );
}
