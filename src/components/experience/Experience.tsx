import { FC } from 'react';
import styles from './Experience.module.scss';

export const Experience:FC = () => {
    return (
        <section className={styles.container}>
            <h3 className={styles.title}>Experience:</h3>
            <ul className={styles.list}>
                <li className={styles.item}>Adaptive and cross-browser website layout using preprocessors.</li>
                <li className={styles.item}>Practicing the creation of user interfaces through MUI, Ant Design, TailwindCSS and CSS-in-JS approaches.</li> 
                <li className={styles.item}>Developing Single Page Applications based on React components, hooks, state manager and additional libraries.</li> 
                <li className={styles.item}>Working with asynchronous code using the React Query, Axios library and test API.</li> 
                <li className={styles.item}>Utilizing the Git version control system in my work and deploying pet-projects on external services.</li>
                <li className={styles.item}>Implementing and practicing with TypeScript, Redux Toolkit and RTK Query in ongoing projects.</li>
                <li className={styles.item}>Creating modern websites using new features such as NextJS.</li>
            </ul>
        </section>
    )
}