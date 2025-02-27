"use client";
import { useEffect, useState } from "react";

import getDynamicTitle from "@/helpers/getDynamicTitle";

import styles from "./Title.module.css";

export default function Title({ title }: { title: string }) {
  const [dynamicTitle, setDynamicTitle] = useState<string>(title);

  useEffect(() => {
    const updatedTitle = getDynamicTitle(title);
    setDynamicTitle(updatedTitle);
  }, [title]);

  return <h1 className={styles.title}>{dynamicTitle}</h1>;
}
