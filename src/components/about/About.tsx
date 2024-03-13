"use client"
import Image from "next/image"
import styles from "./About.module.scss"
import dmitriy from "../../../public/dmitriy.jpeg"
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

    const [ isGmailCopy, setGmailCopy ] = useState(false);

    const gmail = "dimitrusmeleskausas@gmail.com";

    const handleCopy = () => {
        setGmailCopy(true);
        navigator.clipboard.writeText(gmail);
    }

    return (
        <section className={styles.container}>
            <div className={styles.imgContainer}>
                <Image  src={dmitriy} alt="Dmitriy"
                        fill
                        />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.name}>Dmitriy Meleshko</h1>
                <p className={styles.description}>A young and ambitious Frontend React Developer. My passion lies in creating appealing user interfaces and currently, my main goal is to gain commercial experience in this field. I am ready for active learning, adopting cutting-edge methods and closely collaborating within a team. I have significant experience in communication and successful participation in team events. Actively studying modern technologies in the field of application development.</p>
                <div className={`${styles.gmail} ${isGmailCopy && styles.copied}`}>
                    <span className={styles.icon}><IoIosMail /></span>
                    <span className={styles.address}>{gmail}</span>
                    <button className={`${styles.copyButton} ${styles.icon}`} onClick={handleCopy}>
                        { isGmailCopy   ?   <IoMdDoneAll />
                                        :   <FaRegCopy />}
                    </button>
                </div>
                <div className={styles.links}>
                    <Link target="blank" className={styles.link} href="https://github.com/MeleshkoDmitriy"><ImGithub className={styles.socialIcons}/>GitHub</Link>
                    <Link target="blank" className={styles.link} href="https://telegram.me/dimitrusmeleskausas"><FaTelegram className={styles.socialIcons}/>Telegram</Link>
                    <Link target="blank" className={styles.link} href="https://docs.google.com/document/d/1zAFl5OjQKbYHxi6nC0qBIV1XbiYje089FT2CnngGyJk/edit?usp=drive_link"><IoDocumentTextSharp className={styles.socialIcons}/>Resume</Link>
                    <Link target="blank" className={styles.link} href="https://www.linkedin.com/in/dmitriy-meleshko-7034672b2/"><FaLinkedin className={styles.socialIcons}/>Linkedin</Link>
                </div>
            </div>
        </section>
    )
}