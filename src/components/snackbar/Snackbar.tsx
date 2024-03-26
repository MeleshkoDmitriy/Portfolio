// import { motion } from "framer-motion";
// import { FC, useEffect, useState } from "react";
// import styles from "./Snackbar.module.scss";

// interface SnackbarProps {
//   message: string;
// }

// export const Snackbar:FC<SnackbarProps> = ({ message }) => {
//   const [topPosition, setTopPosition] = useState(0);

//   useEffect(() => {
//     const updateTopPosition = () => {
//       if (window.innerWidth < 450) {
//         const headerHeight = 80;
//         const distanceFromHeader = 20;
//         setTopPosition(headerHeight + distanceFromHeader);
//       } else {
//         const windowHeight = window.innerHeight;
//         setTopPosition(windowHeight);
//       }
      

//     window.addEventListener("resize", updateTopPosition);
//     updateTopPosition();

//     return () => {
//       window.removeEventListener("resize", updateTopPosition);
//     };
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: topPosition }}
//       animate={{ opacity: 1, y: 250 }}
//       exit={{ opacity: 0, y: topPosition }}
//       transition={{ ease: "easeInOut", duration: 0.75 }}
//       style={{ top: `calc(${topPosition}px - 400px)` }}
//       className={styles.container}
//     >
//         <div className={styles.snackbar}>
//             {message}
//         </div>
//     </motion.div>
//   );
// };

import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import styles from "./Snackbar.module.scss";

interface SnackbarProps {
  message: string;
}

export const Snackbar: FC<SnackbarProps> = ({ message }) => {
  const [topPosition, setTopPosition] = useState(0);

  useEffect(() => {
    const updateTopPosition = () => {
      if (window.innerWidth < 450) {
        const headerHeight = 80;
        const distanceFromHeader = 20;
        setTopPosition(headerHeight + distanceFromHeader);
      } else {
        const windowHeight = window.innerHeight;
        setTopPosition(windowHeight);
      }
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
      animate={{ opacity: 1, y: 250 }}
      exit={{ opacity: 0, y: topPosition }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      style={{ top: `calc(${topPosition}px - 400px)` }}
      className={styles.container}
    >
      <div className={styles.snackbar}>{message}</div>
    </motion.div>
  );
};
