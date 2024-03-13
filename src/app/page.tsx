import Image from "next/image";
import styles from "./page.module.scss";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";

export default function Home() {
  return (
    <main className={styles.main}>
      <About />
      <Skills />
    </main>
  );
}
