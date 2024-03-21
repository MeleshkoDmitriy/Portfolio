import { ProjectsList } from "@/components/projectsList/ProjectsList";
import { Skills } from "@/components/skills/Skills";
import styles from './ProjectsPage.module.scss'


export default function ProjectsPage () {
    return (
        <section className={styles.container}>
            <Skills />
            <ProjectsList />
        </section>
    )
}