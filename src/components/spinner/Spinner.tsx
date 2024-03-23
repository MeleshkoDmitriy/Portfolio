import styles from './Spinner.module.scss';
import { AiOutlineLoading } from "react-icons/ai";


export const Spinner = ({heightSize, fontSize = '50px'}) => {
    return (
        <section className={styles.loading} style={{height: `${heightSize}`}}>
            <span><AiOutlineLoading  className={styles.spinner} style={{fontSize: `${fontSize}`}}/></span>
        </section>
    )
}