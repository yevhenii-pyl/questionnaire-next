"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import cn from "classnames";

import LogoBlack from "@/public/logo-black.svg";
// import LogoWhite from "@/public/logo-white.svg";

import styles from "./QuestionHeader.module.css";

export default function QuestionHeader() {
  const router = useRouter();

  const isInitialQuestion = false;

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
        src={LogoBlack}
        width={24}
        height={24}
        alt="Nebula Logo"
        className={styles.logo}
      />
    </nav>
  );
}
