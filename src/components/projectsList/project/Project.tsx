import Image from 'next/image';
import styles from './Project.module.scss';
import Link from 'next/link';

import { 
    SiHtml5, 
    SiCss3, 
    SiSass, 
    SiCssmodules,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiRedux,
    SiNextdotjs,
    SiReactquery,
    SiReactrouter,
    SiAxios,
    SiStyledcomponents,
    SiTailwindcss,
    SiMui,
    SiAntdesign,
    SiGithub,
    SiNetlify
} from "react-icons/si";

export const techs = {
    HTML: <SiHtml5 />,
    CSS: <SiCss3 />,
    SCSS: <SiSass />,
    'SCSS modules': <SiCssmodules />,
    JavaScript: <SiJavascript />,
    TypeScript: <SiTypescript />,
    React: <SiReact />,
    Redux: <SiRedux />,
    NextJS: <SiNextdotjs />,
    'ReactQuery': <SiReactquery />,
    'React Router': <SiReactrouter />,
    'Axios': <SiAxios />,
    'Styled Components': <SiStyledcomponents />,
    TailwindCSS: <SiTailwindcss />,
    'Material-UI': <SiMui />,
    'AntDesign': <SiAntdesign />,
    GitHub: <SiGithub />,
    Netlify: <SiNetlify />,
}

export const Project = ( project ) => {

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
                    
                    