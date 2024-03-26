"use client"
import styles from './NotFound.module.scss';
import { useRouter } from 'next/navigation';
import { IoHomeOutline } from "react-icons/io5";
import { IoIosList } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not found',
  description: "Project not found",
}

export default function NotFound () {

    const router = useRouter();

    return (
        <section className={styles.container}>
                <h1 className={styles.title}>Not found such a project!</h1>
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
        </section>
    )
}