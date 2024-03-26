'use client'
import { useState } from 'react'
import styles from './Header.module.scss'
import { NavLinks } from './navLinks/NavLinks';
import Image from 'next/image';
// import bulbLight from '../../../public/image/bulbLight.png';

export const Header = () => {

    const [isSearching, setSearching] = useState(true);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.offer}>
                        <b className={styles.currently}>Currently  
                            {isSearching    ? ' looking for offer '
                                            : ' already employed'}
                        </b> 
                        {/* <Image 
                            src={bulbLight}
                            width={20}
                            height={20}
                            className={styles.bulb}
                            /> */}
                    </div>
                    <NavLinks />
            </div>
        </header>
    )
}