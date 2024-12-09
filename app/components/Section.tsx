import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { useRef, useEffect } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
  transition?: object;
};

export default function Slide({
  children,
  delay = 0,
  className,
  variants = {
    hidden: { opacity: 0, x: 90 }, 
    visible: { opacity: 1, x: 0 },
  },
  transition = {
    type: "spring",
    duration: 0.2,
    damping: 8,
    delay: delay,
    stiffness: 100,
  },
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      transition={transition}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}