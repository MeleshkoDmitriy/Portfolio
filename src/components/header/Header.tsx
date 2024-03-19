'use client'
import { useState } from 'react'
import styles from './Header.module.scss'
import { NavLinks } from './navLinks/NavLinks';
import { LuDot } from "react-icons/lu";

export const Header = () => {

    const [isSearching, setSearching] = useState(true)

    return (
        <header className={styles.header}>
                <div className={styles.offer}>
                    <b className={styles.currently}>Currently:</b> 
                        {isSearching    ? <span className={styles.status}>Looking for Offer<LuDot className={styles.dot}/></span>
                                        : <span className={styles.status}>Already Employed</span>}
                </div>
                <NavLinks />
        </header>
    )
}