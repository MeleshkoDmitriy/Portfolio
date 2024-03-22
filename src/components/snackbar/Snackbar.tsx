import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./Snackbar.module.scss";

export const Snackbar = ({ message }) => {
  const [topPosition, setTopPosition] = useState(0);

  useEffect(() => {
    const updateTopPosition = () => {
      const windowHeight = window.innerHeight;
      setTopPosition(windowHeight - 100);
    };

    window.addEventListener("resize", updateTopPosition);
    updateTopPosition();

    return () => {
      window.removeEventListener("resize", updateTopPosition);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: topPosition }}
      animate={{ opacity: 1, y: 200 }}
      exit={{ opacity: 0, y: topPosition }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      style={{ top: `calc(${topPosition}px - 100px)` }}
    >
        <div className={styles.snackbar}>
            {message}
        </div>
    </motion.div>
  );
};

export default Snackbar;
