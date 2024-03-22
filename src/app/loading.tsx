import { FaSpinner } from "react-icons/fa";
import styles from './page.module.scss';

export default function Loading () {
    return (
        <section className={styles.loading}>
            <span><FaSpinner  className={styles.spinner}/></span>
        </section>
    )
}