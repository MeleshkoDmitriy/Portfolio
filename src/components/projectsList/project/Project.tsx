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
    SCSSmodules: <SiCssmodules />,
    JavaScript: <SiJavascript />,
    TypeScript: <SiTypescript />,
    React: <SiReact />,
    Redux: <SiRedux />,
    NextJS: <SiNextdotjs />,
    ReactQuery: <SiReactquery />,
    ReactRouter: <SiReactrouter />,
    Axios: <SiAxios />,
    StyledComponents: <SiStyledcomponents />,
    TailwindCSS: <SiTailwindcss />,
    'Material-UI': <SiMui />,
    AntDesign: <SiAntdesign />,
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
            <span className={styles.title}>
                {title}
            </span>
            <div className={styles.imageWrapper}>
                    <Image src={image}  alt={title} className={styles.image}/>
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
                                {/* <Link> */}
                                    <button className={styles.button}>
                                            Learn more
                                    </button>
                                {/* </Link> */}
                                <Link href={github} target='blank'>
                                    <button className={styles.button}>
                                            GitHub {techs.GitHub}
                                    </button>
                                </Link>
                                <Link href={netlify} target='blank'>
                                    <button className={styles.button}>
                                            Netlify {techs.Netlify}
                                    </button>
                                </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
                    
                    