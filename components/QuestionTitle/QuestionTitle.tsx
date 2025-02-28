"use client";
import { useEffect, useState, ReactNode } from "react";

import getDynamicTitle from "@/helpers/getDynamicTitle";

import styles from "./QuestionTitle.module.css";

type QuestionTitleProps = {
  title: string;
  children: ReactNode;
};

export default function QuestionTitle({ title, children }: QuestionTitleProps) {
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
