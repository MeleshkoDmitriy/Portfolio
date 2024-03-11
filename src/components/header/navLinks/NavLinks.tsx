import Link from "next/link";
import styles from './NavLinks.module.scss';
import { NavLink } from "./navLink/NavLink";

interface Link {
    title: string,
    path: string,
}

export const NavLinks = () => {

    const links:Link[] = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Projects",
            path: "/projects"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contacts",
            path: "/contacts"
        },
    ]

    return (
        <nav className={styles.nav}>
            {links.map((link) => {
                return <NavLink link={link} key={link.title}/>
            })}
        </nav>
    )
}