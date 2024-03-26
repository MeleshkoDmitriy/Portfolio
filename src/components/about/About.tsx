"use client"
import Image from "next/image"
import styles from "./About.module.scss"
import dmitriy from "../../../public/image/dmitriy.jpeg"
import { useState } from "react"
import { FaRegCopy } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";
import { ImGithub } from "react-icons/im";
import { FaTelegram } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";


export const About = () => {

    const [ isGmailCopied, setGmailCopied ] = useState(false);

    const gmail = "dimitrusmeleskausas@gmail.com";

    const handleCopy = () => {
        setGmailCopied(true);
        navigator.clipboard.writeText(gmail);
        setTimeout(() => {
            setGmailCopied(false);
        }, 500)
    };

    return (
        <section className={styles.container}>
            <div className={styles.imgContainer}>
                <Image  src={dmitriy} alt="Dmitriy"
                        fill
                        placeholder='blur'
                        />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.name}>Dmitriy Meleshko</h1>
                <p className={styles.description}>A young and ambitious Frontend React Developer. My passion lies in creating appealing user interfaces and currently, my main goal is to gain commercial experience in this field. I am ready for active learning, adopting cutting-edge methods and closely collaborating within a team. I have significant experience in communication and successful participation in team events. Actively studying modern technologies in the field of application development.</p>
                <div className={styles.gmail}>
                    <span className={`${styles.icon} ${styles.mailIcon}`}><IoIosMail /></span>
                    <span className={styles.address}>{gmail}</span>
                    <button className={`${styles.copyButton} ${styles.icon}`} onClick={handleCopy}>
                        <FaRegCopy />
                    </button>
                    <span className={styles.doneWrapper}>
                        <IoMdDoneAll className={`${styles.done} ${styles.icon} ${isGmailCopied && styles.animation}`}/>
                    </span>
                </div>
                <div className={styles.links}>
                    <Link target="blank" className={styles.link} href="https://github.com/MeleshkoDmitriy"><ImGithub className={`${styles.socialIcons} ${styles.github}`}/><span>GitHub</span></Link>
                    <Link target="blank" className={styles.link} href="https://telegram.me/dimitrusmeleskausas"><FaTelegram className={`${styles.socialIcons} ${styles.telegram}`}/><span>Telegram</span></Link>
                    <Link target="blank" className={styles.link} href="https://docs.google.com/document/d/1zAFl5OjQKbYHxi6nC0qBIV1XbiYje089FT2CnngGyJk/edit?usp=drive_link"><IoDocumentTextSharp className={`${styles.socialIcons} ${styles.resume}`}/><span>Resume</span></Link>
                    <Link target="blank" className={styles.link} href="https://www.linkedin.com/in/dmitriy-meleshko-7034672b2/"><FaLinkedin className={`${styles.socialIcons} ${styles.linkedin}`}/><span>Linkedin</span></Link>
                </div>
            </div>
        </section>
    )
}