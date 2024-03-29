import { projects } from '@/lib/data/data'
import styles from './ProjectsList.module.scss'
import { Project } from './project/Project'
import { FC } from 'react'


export const ProjectsList:FC = () => {

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Projects:</h3>
            {projects.map((project) => {
                return <Project {...project} key={project.id}/>
            })}
        </div>
    )
}
