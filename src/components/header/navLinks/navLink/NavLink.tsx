"use client"
import Link from "next/link"
import styles from "./NavLink.module.scss"
import { usePathname } from "next/navigation"

interface LinkProps {
    link: {
      title: string;
      path: string;
    };
    onClick?: () => void;
  }

export const NavLink = ({ link, onClick }: LinkProps) => {

    const path = usePathname();

    return (
        <Link   href={link.path}
                key={link.title}
                onClick={onClick} 
                className={`${styles.link} ${path === link.path && styles.active}`}
                >
            {link.title}
        </Link>
    )
}