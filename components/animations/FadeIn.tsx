"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  once?: boolean;
}

const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  y = 30,
  x = 0,
  once = true,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      style={{
        x,
        y,
      }}
      whileHover={{
        scale: 1.02,
      }}
    >
      <motion.div
        initial={{ x, y }}
        whileInView={{ x: 0, y: 0 }}
        viewport={{ once }}
        transition={{
          duration,
          delay,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}