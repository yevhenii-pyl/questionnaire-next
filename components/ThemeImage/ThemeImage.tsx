"use client";

import Image, { ImageProps } from "next/image";
import cn from "classnames";

import { useTheme } from "@/app/providers/ThemeProvider";

import styles from "./ThemeImage.module.css";

type Props = Omit<ImageProps, "src" | "priority" | "loading"> & {
  srcLight: string;
  srcDark: string;
  width: number;
  height: number;
  alt: string;
};

export default function ThemeImage(props: Props) {
  const { srcLight, srcDark, alt, ...rest } = props;
  const { theme } = useTheme();

  const defaultThemeActive = theme === "default";

  return (
    <>
      <Image
        {...rest}
        alt={alt}
        src={srcLight}
        className={cn(styles.imgLight, styles.icon, {
          [styles.active]: !defaultThemeActive,
        })}
      />
      <Image
        {...rest}
        alt={alt}
        src={srcDark}
        className={cn(styles.imgDark, styles.icon, {
          [styles.active]: defaultThemeActive,
        })}
      />
    </>
  );
}
