import { ProjectsList } from "@/components/projectsList/ProjectsList";
import { Skills } from "@/components/skills/Skills";
import styles from './ProjectsPage.module.scss'
import { Experience } from "@/components/experience/Experience";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: "Projects list",
}

export default function ProjectsPage () {
    return (
        <section className={styles.container}>
            <ProjectsList />
            <Skills />
            <Experience />
        </section>
    )
}