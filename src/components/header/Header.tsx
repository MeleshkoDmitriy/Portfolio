'use client'
import { useState } from 'react'
import styles from './Header.module.scss'
import { NavLinks } from './navLinks/NavLinks'

export const Header = () => {

    const [isSearching, setSearching] = useState(true)

    return (
        <header className={styles.header}>
                <div className={styles.offer}>
                    Currently: {isSearching ? <span>looking for offer</span>
                                            : <span>already employed</span>}
                </div>
                <NavLinks />
        </header>
    )
}