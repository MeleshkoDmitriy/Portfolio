"use client"
import Link from "next/link"
import styles from "./NavLink.module.scss"
import { usePathname } from "next/navigation"


export const NavLink = ({ link }) => {

    const path = usePathname();

    return (
        <Link   href={link.path} key={link.title} 
                className={`${styles.link} ${path === link.path && styles.active}`}>
            {link.title}
        </Link>
    )
}