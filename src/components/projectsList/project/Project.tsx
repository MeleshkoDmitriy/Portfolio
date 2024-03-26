import Image from 'next/image';
import styles from './Project.module.scss';
import Link from 'next/link';
import { TProject } from '@/lib/types/types';
import { techs } from '@/components/skills/Skills';

export const Project = ( project: TProject ) => {

    const { 
            id,
            title, 
            stack, 
            image, 
            description,
            github,
            netlify
    } = project;

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                {title}
            </h3>
            <div className={styles.imageWrapper}>
                    <Image 
                        src={image}  alt={title} 
                        className={styles.image}
                        loading='lazy'
                        placeholder='blur'/>
            </div>
            <div className={styles.body}>
                <div className={styles.description}>
                    {description}
                </div>
                <div className={styles.panel}>
                    <div className={styles.iconsWrapper}>
                                 {stack.map((tech) => {
                                     if (tech in techs) {
                                         return (
                                             <div key={tech} className={styles.icon}>
                                                 {techs[tech]}
                                             </div>
                                         );
                                     }
                                     return null;
                                 })}
                    </div>
                    <div className={styles.actions}>
                                <Link href={`/projects/${id}`}>
                                    <button className={`${styles.button} ${styles.learn}`}>
                                            Learn more
                                    </button>
                                </Link>
                                <Link href={github} target='blank'>
                                    <button className={styles.button}>
                                            GitHub<span>{techs.GitHub}</span>
                                    </button>
                                </Link>
                                <Link href={netlify} target='blank'>
                                    <button className={styles.button}>
                                            Netlify<span>{techs.Netlify}</span>
                                    </button>
                                </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
                    
                    