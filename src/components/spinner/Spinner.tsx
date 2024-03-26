import { FC } from 'react';
import styles from './Spinner.module.scss';
import { AiOutlineLoading } from "react-icons/ai";

interface SpinnerProps {
    heightSize: string;
    fontSize?: string;
}

export const Spinner:FC<SpinnerProps> = ({heightSize, fontSize = '50px'}) => {
    return (
        <section className={styles.loading} style={{height: `${heightSize}`}}>
            <span><AiOutlineLoading  className={styles.spinner} style={{fontSize: `${fontSize}`}}/></span>
        </section>
    )
}