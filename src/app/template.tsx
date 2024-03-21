"use client"

import { motion } from 'framer-motion';

export default function Template ({ children }: React.ReactNode) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ easy: 'easyInOut', duration: 0.75 }}
        >
            {children}
        </motion.div>
    )
}