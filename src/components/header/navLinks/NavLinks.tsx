"use client"
import Link from "next/link";
import styles from './NavLinks.module.scss';
import { NavLink } from "./navLink/NavLink";
import { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { CgClose } from "react-icons/cg";

interface Link {
    title: string,
    path: string,
}

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
        title: "Contacts",
        path: "/contacts"
    },
    {
        title: "Feedback",
        path: "/feedback"
    },

]

export const NavLinks = () => {

    const [ isMenuOpen, setMenuOpen ] = useState(false);

    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                {links.map((link) => {
                    return <NavLink link={link} key={link.title}/>
                })}
            </nav>
            <button onClick={() => setMenuOpen(prev => !prev)}
                    className={styles.burgerButton}>
                    {isMenuOpen ? <CgClose />
                                : <TbMenu2 />}
            </button>
            {isMenuOpen &&  <nav className={styles.navMobile}>
                                {links.map((link) => {
                                        return <NavLink link={link} key={link.title}/>
                                    })}
                            </nav>}
        </div>

    )
}