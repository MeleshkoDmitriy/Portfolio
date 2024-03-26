"use client"
import { useRouter } from 'next/navigation';
import styles from './NotFound.module.scss';
import { IoHomeOutline } from "react-icons/io5";
import { IoIosList } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not found',
  description: "Page not found",
}

export default function NotFound () {

    const router = useRouter();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Page Not Found</h1>
            <div className={styles.actions}>
                    <button className={styles.button}
                            onClick={() => router.back()}
                            >
                        <span><IoArrowBackOutline /></span>Back
                    </button>
                    <button className={styles.button}
                            onClick={() => router.replace('/projects')}
                            >
                        <span><IoIosList /></span>Projects 
                    </button>
                    <button className={styles.button}
                            onClick={() => router.replace('/')}
                            >
                        <span><IoHomeOutline /></span>Home 
                    </button>
                </div>
            
        </div>
    )
}