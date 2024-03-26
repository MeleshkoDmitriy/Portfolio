import styles from "./page.module.scss";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { ProjectsList } from "@/components/projectsList/ProjectsList";
import { Feedback } from "@/components/feedback/Feedback";
import { Experience } from "@/components/experience/Experience";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Dmitriy Meleshko',
  description: "Home Page",
}

export default function Home() {
  return (
    <main className={styles.main}>
      <About />
      <Skills />
      <Experience />
      <ProjectsList />
      <Feedback />
    </main>
  );
}
