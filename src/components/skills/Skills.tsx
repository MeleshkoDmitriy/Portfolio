import styles from "./Skills.module.scss"


export const Skills = () => {
    return (
        <section className={styles.container}>
            <div className={styles.technology}>
                <h3>Stack Of Technologies:</h3>
                <div className={styles.wrapper}>
                    <div className={styles.item}>JavaScript / TypeScript</div>
                    <div className={styles.item}>React / NextJS</div>
                    <div className={styles.item}>React-Query (TanStack Query) / Axios</div>
                    <div className={styles.item}>Redux Toolkit / RTK Query</div>
                    <div className={styles.item}>Styled Components / TailwindCSS</div>
                    <div className={styles.item}>Material-UI / Ant Design</div>
                    <div className={styles.item}>HTML / CSS / SASS / SCSS-modules</div>
                    <div className={styles.item}>Popular Libraries</div>
                </div>
            </div>
            <div className={styles.language}>
                <h3>Languages:</h3>
                <div className={styles.wrapper}>
                    <div className={styles.item}><b>Russian</b> – Native</div>
                    <div className={styles.item}><b>English</b> – Upper Intermediate (B2)</div>
                </div>
            </div>
        </section>
    )
}