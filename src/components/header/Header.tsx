'use client'
import { useState } from 'react'
import styles from './Header.module.scss'
import { NavLinks } from './navLinks/NavLinks';

export const Header = () => {

    const [isSearching, setSearching] = useState(true)

    return (
        <header className={styles.header}>
                <div className={styles.offer}>
                    <b className={styles.currently}>Currently  
                        {isSearching    ? ' looking for offer'
                                        : ' already employed'}
                    </b> 
                </div>
                <NavLinks />
        </header>
    )
}