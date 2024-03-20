import styles from "./Skills.module.scss"
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

export const Skills = () => {


    const skillsList = [
        'JavaScript',
        'TypeScript', 
        'React',
        'NextJS', 
        'Redux',
        'Redux Toolkit  / RTKQuery',  
        'ReactQuery',
        'Axios', 
        'StyledComponents', 
        'TailwindCSS',
        'SCSSmodules',
        'Material-UI', 
        'AntDesign',
        'HTML', 
        'CSS', 
        'SCSS', 
        'Other Popular Libraries'
    ]

    return (
        <section className={styles.container}>
            <div className={styles.technology}>
                <h3 className={styles.title}>Stack of Technologies:</h3>
                <div className={styles.wrapper}>
                                {skillsList.map((tech) => {
                                     if (tech in techs) {
                                        return  <Link   href='https://github.com/MeleshkoDmitriy?tab=repositories' 
                                                        target="blank"
                                                        key={tech}>
                                                    <div className={styles.item}>{tech}{techs[tech]}</div>
                                                </Link>
                                     }
                                     return  <Link  href='https://github.com/MeleshkoDmitriy?tab=repositories' 
                                                    target="blank"
                                                    key={tech}>
                                                        <div className={styles.item}>{tech}</div>
                                            </Link>
                                 })}
                </div>
            </div>
            <div className={styles.language}>
                <h3 className={styles.title}>Languages:</h3>
                <div className={styles.wrapper}>
                    <div className={styles.item}><b>Russian</b> – Native</div>
                    <div className={styles.item}><b>English</b> – Upper Intermediate (B2)</div>
                </div>
            </div>
        </section>
    )
}