'use client'
import { FC, useState, useEffect, Suspense } from 'react'
import styles from './Header.module.scss'
import { NavLinks } from './navLinks/NavLinks';
import { API_URL } from '@/lib/api/api';
// import Image from 'next/image';
// import bulbLight from '../../../public/image/bulbLight.png';

export const Header:FC = () => {

    const [isSearching, setSearching] = useState();

    useEffect(() => {
        const getStatus = async () => {
            const response = await fetch(`${API_URL}/status`);
          
            if (!response.ok) {
              throw new Error("Failed getting request!");
            }
          
            const data = await response.json();
            setSearching(data[0].status);
          }
        
        getStatus();
    }, [])
    
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.offer}>
                        <b className={styles.currently}>Currently  
                            <Suspense fallback={<span>Loading...</span>}>
                                {isSearching && ' looking for offer'} 
                                {!isSearching && ' employed'} 
                            </Suspense>
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