import Link from 'next/link'
import styles from './Footer.module.scss';
import { SiGithub, SiNextdotjs, SiReact, SiTypescript, SiSass, SiCssmodules } from "react-icons/si";
import { PiFramerLogoFill } from "react-icons/pi";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span className={styles.info}>Made by Dmitriy Meleshko.   <Link   href='https://github.com/MeleshkoDmitriy/Portfolio'
                                                target='blank'
                                                className={styles.link}
                                                >
                                                Portfolio repository <SiGithub />
                                        </Link>
            </span>
            <div className={styles.stack}>
                <span>Portfolio stack:</span>
                <div className={styles.icons}>
                    <Link   href='https://github.com/MeleshkoDmitriy/Portfolio'
                            target='blank'>
                                <SiNextdotjs className={styles.icon}/>
                    </Link>
                    <Link   href='https://github.com/MeleshkoDmitriy/Portfolio'
                            target='blank'>
                            <SiReact className={styles.icon}/>
                    </Link>
                    <Link   href='https://github.com/MeleshkoDmitriy/Portfolio'
                            target='blank'>
                                <SiTypescript className={styles.icon}/>
                    </Link>
                    <Link   href='https://github.com/MeleshkoDmitriy/Portfolio'
                            target='blank'>
                                <SiSass className={styles.icon}/>
                    </Link>
                    <Link   href='https://github.com/MeleshkoDmitriy/Portfolio'
                            target='blank'>
                                <PiFramerLogoFill className={styles.icon}/>
                    </Link>
                    <Link   href='https://github.com/MeleshkoDmitriy/Portfolio'
                            target='blank'>
                                <SiCssmodules className={styles.icon}/>
                    </Link>

                </div>
            </div>


        </footer>
    )
}