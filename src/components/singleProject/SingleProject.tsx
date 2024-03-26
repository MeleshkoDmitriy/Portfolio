import Image from 'next/image';
import styles from './SingleProject.module.scss';
import Link from 'next/link';
import { IoHomeOutline } from "react-icons/io5";
import { TProject } from '@/lib/types/types';
import { techs } from '../skills/Skills';

export const SingleProject = ( project: TProject ) => {

    const { 
        title,
        description,
        image,
        stack,
        features,
        github,
        netlify
     } = project;

    return (
        <section className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.imageWrapper}>
                    <Image
                        src={image}  alt={title} 
                        className={styles.image}
                        placeholder='blur'/>
            </div>
            <div className={styles.body}>
                <div className={styles.description}>
                    {description}
                </div>
                <div className={styles.infoBlock}>
                    <div className={styles.features}>
                        <h4 className={styles.subTitle}>
                            Features:
                        </h4>
                        <ul className={styles.list}>
                            {features?.map((feature) => {
                                return <li key={feature} className={styles.item}>{feature}</li>
                            })}
                        </ul>
                    </div>
                    <div className={styles.panel}>
                        <div className={styles.iconsWrapper}>
                            <h4 className={styles.subTitle}>Project stack:</h4>
                            <ul className={styles.list}>
                                {stack.map((tech) => {
                                        if (tech in techs) {
                                            return (
                                                <li key={tech} className={`${styles.icon} ${styles.item}`}>
                                                    <span>{techs[tech]}</span> {tech}
                                                </li>
                                            );
                                        }
                                        return  <li key={tech} className={`${styles.icon} ${styles.item}`}>
                                                    {tech}
                                                </li>;
                                })}
                            </ul>

                        </div>
                        <div className={styles.actions}>
                                    <Link href={github} target='blank'>
                                        <button className={styles.button}>
                                                GitHub <span>{techs.GitHub}</span>
                                        </button>
                                    </Link>
                                    <Link href={netlify} target='blank'>
                                        <button className={styles.button}>
                                                Netlify <span>{techs.Netlify}</span>
                                        </button>
                                    </Link>
                                    <Link href='/'>
                                        <button className={styles.button}>
                                                Home <span><IoHomeOutline /></span>
                                        </button>
                                    </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}