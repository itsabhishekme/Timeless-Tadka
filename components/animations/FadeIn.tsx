"use client";

import { motion, Variants, Transition } from "framer-motion";
import { JSX, ReactNode } from "react";

export interface FadeInProps {
  children: ReactNode;

  className?: string;

  delay?: number;

  duration?: number;

  y?: number;

  x?: number;

  scale?: number;

  rotate?: number;

  blur?: number;

  opacity?: number;

  once?: boolean;

  amount?: number;

  hover?: boolean;

  hoverScale?: number;

  tap?: boolean;

  tapScale?: number;

  staggerChildren?: number;

  delayChildren?: number;

  ease?: Transition["ease"];

  as?: keyof JSX.IntrinsicElements;
}

const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
  },

  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
  },
};

export default function FadeIn({
  children,

  className = "",

  delay = 0,

  duration = 0.8,

  y = 40,

  x = 0,

  scale = 0.95,

  rotate = 0,

  blur = 8,

  opacity = 0,

  once = true,

  amount = 0.25,

  hover = false,

  hoverScale = 1.02,

  tap = false,

  tapScale = 0.98,

  staggerChildren = 0,

  delayChildren = 0,

  ease = "easeOut",
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount,
      }}
      transition={{
        duration,
        delay,
        ease,
        staggerChildren,
        delayChildren,
      }}
      style={{
        willChange: "transform, opacity",
      }}
      whileHover={
        hover
          ? {
              scale: hoverScale,
            }
          : undefined
      }
      whileTap={
        tap
          ? {
              scale: tapScale,
            }
          : undefined
      }
    >
      <motion.div
        initial={{
          opacity,
          x,
          y,
          scale,
          rotate,
          filter: `blur(${blur}px)`,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          filter: "blur(0px)",
        }}
        viewport={{
          once,
          amount,
        }}
        transition={{
          duration,
          delay,
          ease,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                PRESETS                                     */
/* -------------------------------------------------------------------------- */

export function FadeUp(props: FadeInProps) {
  return <FadeIn {...props} y={60} />;
}

export function FadeDown(props: FadeInProps) {
  return <FadeIn {...props} y={-60} />;
}

export function FadeLeft(props: FadeInProps) {
  return <FadeIn {...props} x={-60} y={0} />;
}

export function FadeRight(props: FadeInProps) {
  return <FadeIn {...props} x={60} y={0} />;
}

export function ZoomIn(props: FadeInProps) {
  return (
    <FadeIn
      {...props}
      scale={0.8}
      blur={12}
      duration={0.9}
    />
  );
}

export function ZoomOut(props: FadeInProps) {
  return (
    <FadeIn
      {...props}
      scale={1.2}
      blur={8}
      duration={0.9}
    />
  );
}

export function RotateFade(props: FadeInProps) {
  return (
    <FadeIn
      {...props}
      rotate={10}
      blur={10}
      duration={0.8}
    />
  );
}

export function BlurReveal(props: FadeInProps) {
  return (
    <FadeIn
      {...props}
      blur={20}
      duration={1}
    />
  );
}

export function HeroReveal(props: FadeInProps) {
  return (
    <FadeIn
      {...props}
      y={100}
      scale={0.9}
      blur={20}
      duration={1.2}
      hover={false}
    />
  );
}

export function CardReveal(props: FadeInProps) {
  return (
    <FadeIn
      {...props}
      y={40}
      blur={10}
      hover
      hoverScale={1.04}
      duration={0.6}
    />
  );
}

export function ImageReveal(props: FadeInProps) {
  return (
    <FadeIn
      {...props}
      scale={0.9}
      blur={15}
      duration={1}
      hover
      hoverScale={1.05}
    />
  );
}

export function TextReveal(props: FadeInProps) {
  return (
    <FadeIn
      {...props}
      y={25}
      blur={4}
      duration={0.5}
    />
  );
}

export function SectionReveal(props: FadeInProps) {
  return (
    <FadeIn
      {...props}
      y={80}
      blur={15}
      duration={1}
      delay={0.1}
    />
  );
}