"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import cn from "classnames";

import Logo from "@/public/logo-black.svg";

import styles from "./QuestionHeader.module.css";

export default function QuestionHeader() {
  const router = useRouter();
  const path = usePathname();

  const id = path.split("/")[2];

  const isInitialQuestion = Number(id) === 1;

  return (
    <nav className={styles.header}>
      <button
        className={cn(styles.backButton, {
          [styles.backButonHidden]: isInitialQuestion,
        })}
        onClick={() => router.back()}
        aria-label="Go to previous question"
      >
        <i className={styles.backIcon} />
      </button>
      <Image
        src={Logo}
        width={24}
        height={24}
        alt="Nebula Logo"
        className={styles.logo}
      />
    </nav>
  );
}
