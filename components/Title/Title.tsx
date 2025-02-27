"use client";
import { useEffect, useState, ReactNode } from "react";

import getDynamicTitle from "@/helpers/getDynamicTitle";

import styles from "./Title.module.css";

type TitleProps = {
  title: string;
  children: ReactNode;
};

export default function Title({ title, children }: TitleProps) {
  const [dynamicTitle, setDynamicTitle] = useState<string | null>(null);

  useEffect(() => {
    const updatedTitle = getDynamicTitle(title);
    setDynamicTitle(updatedTitle);
  }, [title]);

  if (!dynamicTitle) {
    return (
      <h1 className={styles.title}>
        <span className={styles.loader} />
      </h1>
    );
  }

  return (
    <>
      <h1 className={styles.title}>{dynamicTitle}</h1>
      {children}
    </>
  );
}
