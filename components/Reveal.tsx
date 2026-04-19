"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  y = 40,
  className = "",
  rotate = 0,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  rotate?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, rotate: rotate !== 0 ? rotate * 2 : 0 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
